import { combineReducers } from 'redux';

import usersReducer from './users_reducer';
import priceReducer from './price_reducer';

const entitiesReducer = combineReducers({
  users: usersReducer,
  price: priceReducer
});

export default entitiesReducer;