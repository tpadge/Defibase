import {RECEIVE_PRICE} from '../actions/coin_actions';
import merge from 'lodash/merge';

const _nullPrice = Object.freeze({
  ETH: null
});

const priceReducer = (state = _nullPrice, action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_PRICE:
      let newState = merge({}, state);
      let price = action.response;
      newState[price] = action.response;
      return newState;
    default:
      return state;
  }
};

export default priceReducer;
