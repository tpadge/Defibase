import * as CoinGecko from '../utils/coinGecko';
import * as CoinAPIUtil from '../utils/coin_compare';


export const RECEIVE_PRICE = "RECEIVE_PRICE";

const receivePrice = response => ({
  type: RECEIVE_PRICE,
  response
});

export const getPrice = symbol => dispatch => (
  CoinAPIUtil.getPrice(symbol)
  .then(response => (
    dispatch(receivePrice(response))
  ))
);


