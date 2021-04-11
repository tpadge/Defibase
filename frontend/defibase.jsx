import React from 'react';
import ReactDOM from 'react-dom';
import Root from './components/root';
import configureStore from './store/store'
import { getDetails, getChartDetails, getList,getChart} from './utils/coin_compare';




document.addEventListener('DOMContentLoaded', () => {
  const root = document.getElementById('root');
  let store;
  if (window.currentUser) { //gets currentUser from appl.html.erb
    const preloadedState = {
      session: { id: window.currentUser.id },
      entities: {
        users: { [window.currentUser.id]: window.currentUser }
      }
    };
    store = configureStore(preloadedState);
    delete window.currentUser;
  } else {
    store = configureStore();
  }
  
  ReactDOM.render(<Root store={store} />, root);

  window.getState = store.getState;
  window.getDetails = getDetails;
  window.getChartDetails = getChartDetails;
  window.getList = getList;
  window.getChart = getChart;
});