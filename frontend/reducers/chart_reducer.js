import { RECEIVE_CHART } from '../actions/coin_actions';
import merge from 'lodash/merge';
import detailsReducer from './coin_details_reducer';

const _nullChart = Object.freeze({
  chart: null
});

const chartReducer = (state =_nullChart, action) => {
  Object.freeze(state);
  let newState = merge({}, state);

  switch(action.type) {
    case RECEIVE_CHART:
      let newChart = action.response.prices;
      newState.chart = newChart;
      return newState;
    default:
      return state;
  }
};

export default chartReducer;