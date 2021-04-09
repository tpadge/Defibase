import { combineReducers } from 'redux';

import usersReducer from './users_reducer';
import detailsReducer from './coin_details_reducer';
import listReducer from './listReducer';

const entitiesReducer = combineReducers({
  users: usersReducer,
  coins: detailsReducer,
  list: listReducer
});

export default entitiesReducer;