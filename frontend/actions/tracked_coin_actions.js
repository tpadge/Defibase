import * as APIUtil from '../utils/track_api_utils';

export const RECEIVE_TRACKS = "RECEIVE_TRACKS";
export const CREATE_TRACK = "CREATE_TRACK";
export const REMOVE_TRACK = "REMOVE_TRACK";

export const receiveTracks = response => ({
  type: RECEIVE_TRACKS,
  response
});

export const createTrack = coin => ({
  type: CREATE_TRACK,
  coin
});

export const removeTrack = coin => ({
  type: REMOVE_TRACK,
  coin
});

export const getTracks = () => dispatch => (
  APIUtil.fetchTracks()
  .then(tracked_coins => (
    dispatch(receiveTracks(tracked_coins))
    ))
);

export const newTrack = coin => dispatch => (
  APIUtil.addTrack(coin)
  .then(response => (
    dispatch(createTrack(response))
  ))
);

export const destroyTrack = id => dispatch => (
  APIUtil.deleteTrack(id)
  .then((coin) => (
    dispatch(removeTrack(coin))
  ))
);