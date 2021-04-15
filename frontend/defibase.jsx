import React from 'react';
import ReactDOM from 'react-dom';
import Root from './components/root';
import configureStore from './store/store'
import { getDetails, getList, getChart} from './utils/coin_compare';
import { fetchTracks, addTrack, deleteTrack } from './utils/track_api_utils';
import {getTracks, newTrack, destroyTrack} from './actions/tracked_coin_actions';



document.addEventListener('DOMContentLoaded', () => {
  let store;
  if (window.currentUser) { 
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
  const root = document.getElementById('root');
  ReactDOM.render(<Root store={store} />, root);

  window.getState = store.getState;
  window.getDetails = getDetails;
  window.getList = getList;
  window.getChart = getChart;
  window.fetchTracks = fetchTracks;
  window.addTrack = addTrack;
  window.deleteTrack = deleteTrack;
  window.getTracks = getTracks;
  window.newTrack = newTrack;
  window.destroyTrack = destroyTrack;
});