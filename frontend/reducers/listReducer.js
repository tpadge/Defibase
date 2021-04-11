import {RECEIVE_LIST} from '../actions/coin_actions';
import merge from 'lodash/merge';

const listReducer = (state = {}, action) => {
  Object.freeze(state);
  let newState = merge({}, state);

  switch (action.type) {
    case RECEIVE_LIST:
      newState = action.response;
      return newState;
    default:
      return state;
  }
};

export default listReducer;