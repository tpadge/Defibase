import {RECEIVE_HOLDINGS, UPDATE_HOLDING, CREATE_HOLDING, REMOVE_HOLDING} from '../actions/holdings_actions';
import merge from 'lodash/merge';

const holdingsReducer = (oldState = {}, action) => {
  Object.freeze(oldState);
  let nextState = merge({}, oldState)

  switch (action.type) {
    case RECEIVE_HOLDINGS:
      return action.response;
    case CREATE_HOLDING:
      nextState[action.holding.id] = action.holding;
      return nextState;
    case REMOVE_HOLDING:
      delete nextState[action.holding.id];
      return nextState;
    case UPDATE_HOLDING:
      nextState[action.holding.id] = action.holding;
      return nextState;
    default:
      return oldState;
  }
}

export default holdingsReducer;
