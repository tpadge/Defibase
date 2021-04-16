import * as APIUtil from '../utils/holding_api_utli';

export const RECEIVE_HOLDING = "RECEIVE_HOLDING";
export const RECEIVE_HOLDINGS = "RECEIVE_HOLDINGS";
export const UPDATE_HOLDING = "UPDATE_HOLDING";
export const CREATE_HOLDING = "CREATE_HOLDING";
export const REMOVE_HOLDING = "REMOVE_HOLDING";

export const receiveHolding = response => ({
  type: RECEIVE_HOLDING,
  response
});

export const receiveHoldings = response => ({
  type: RECEIVE_HOLDINGS,
  response
});

export const updateHolding = holding => ({
  type: UPDATE_HOLDING,
  holding
});

export const createHolding = holding => ({
  type: CREATE_HOLDING,
  holding
});

export const removeHolding = holding => ({
  type: REMOVE_HOLDING,
  holding
});

export const getHoldings = () => dispatch => (
  APIUtil.fetchHoldings()
  .then(response => (
    dispatch(receiveHoldings(response))
  ))
);

export const newHolding = (name, userId, quantity) => dispatch => (
  APIUtil.createHolding(name, userId, quantity)
  .then(response => (
    disptach(createHolding(response))
  ))
);

export const destroyHolding = id => dispatch => (
  APIUtil.deleteHolding(id)
  .then((holding) => (
    dispatch(removeHolding(holding))
  ))
);

export const updateQuantity = (id, nextQuantity) => (
  APIUtil.updateHolding(id, nextQuantity)
  .then(holding => (
    dispatch(updateHolding(holding))
  ))
);