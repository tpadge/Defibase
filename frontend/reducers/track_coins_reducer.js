import { RECEIVE_TRACKS, CREATE_TRACK, REMOVE_TRACK } from '../actions/tracked_coin_actions';
import merge from 'lodash/merge';

const trackedCoinsReducer = (oldState = {}, action) => {
  Object.freeze(oldState);
  let nextState = merge({}, oldState)

  switch (action.type) {
    case RECEIVE_TRACKS:
      return action.response;
    case CREATE_TRACK:
  //     return Object.assign({}, oldState, {
  //       tracks: state.tracks.concat({
  //         nextState[action.coin.name] =  action.coin
  //       })
  //     })
  // }

//  {
//    const newTrack = oldState.tracks.concat({
//      action.coin.name: action.coin
//    }) 
//    return updateObject(state, { tracks: newTrack })
//  }

    // return {
    //   ...oldState,
    //     tracks: {
    //       ...oldState.tracks,
    //       action.coin.name: action.coin
    //     }
    // }

      // return Object.assign({}, oldState, {

      // })

      nextState[action.coin.id] = action.coin;
      return nextState;
    case REMOVE_TRACK:
      delete nextState[action.coin.id];
      return nextState;
    default:
      return oldState;
  }
}

export default trackedCoinsReducer;