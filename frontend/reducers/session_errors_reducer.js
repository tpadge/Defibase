import { RECEIVE_SESSION_ERRORS, RECEIVE_CURRENT_USER } from '../actions/session_actions';

const sessionErrorsReducer = (state = [], action) => { //oof?
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_SESSION_ERRORS:
      return Object.assign([], action.errors);
    case RECEIVE_CURRENT_USER:
      return []; //oof?
    default: 
      return state;
  }
};

export default sessionErrorsReducer;