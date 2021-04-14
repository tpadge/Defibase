import { RECEIVE_TRACKS, CREATE_TRACK, REMOVE_TRACK } from '../actions/tracked_coin_actions';
import merge from 'lodash/merge';

const trackedCoinsReducer = (oldState = {}, action) => {
  Object.freeze(oldState);
  let nextState = Object.assign({}, oldState)

  switch (action.type) {
    case RECEIVE_TRACKS:
      return action.response;
    case CREATE_TRACK:
      nextState[action.coin.name] = action.coin;
      return nextState;
    case REMOVE_TRACK:
      delete nextState[action.id];
      return nextState;
    default:
      return oldState;
  }
}

export default trackedCoinsReducer;