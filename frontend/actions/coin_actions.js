import * as CoinAPIUtil from '../utils/coin_compare';

export const RECEIVE_COIN = "RECEIVE_COIN";
export const RECEIVE_COINS = "RECEIVE_COINS";
export const RECEIVE_LIST = "RECEIVE_LIST";
export const RECEIVE_CHART = "RECEIVE_CHART";

const receiveCoin = response => ({
  type: RECEIVE_COIN,
  response
});

const receiveCoins = response => ({
  type: RECEIVE_COINS,
  response
})

const receiveList = response => ({
  type: RECEIVE_LIST,
  response
})

const receiveChart = response => ({
  type: RECEIVE_CHART,
  response
})

export const getCoin = name => dispatch => (
  CoinAPIUtil.getDetails(name)
    .then(response => (
      dispatch(receiveCoin(response))
    ))
);

export const getCoins = name => dispatch => (
  CoinAPIUtil.getDetails(name)
    .then(response => (
      dispatch(receiveCoins(response))
    ))
);

export const getList = () => dispatch => (
  CoinAPIUtil.getList()
    .then(response => (
      dispatch(receiveList(response))
    ))
);

export const getChart = name => dispatch => (
  CoinAPIUtil.getChart(name)
    .then(response => (
      dispatch(receiveChart(response))
    ))
);


