import { RECEIVE_COIN, RECEIVE_COINS } from '../actions/coin_actions';
import merge from 'lodash/merge';


const _nullDetails = Object.freeze({
  image: null,
  name: null,
  symbol: null,
  price: null, 
  change: null,
  marketCap: null,
  volume: null,
  circulatingSup: null,
  ath: null
});

const detailsReducer = (state = _nullDetails, action) => {
  Object.freeze(state);
  let newState = merge({}, state);

  switch (action.type) {
    case RECEIVE_COIN:
      let newImage = action.response[0].image;
      let newName = action.response[0].name;
      let newSymbol = action.response[0].symbol;
      let currentPrice = action.response[0].current_price;
      let newChange = action.response[0].price_change_percentage_24h;
      let newCap = action.response[0].market_cap;
      let newVolume = action.response[0].total_volume;
      let newCirculatingSup = action.response[0].circulating_supply;
      let newATH = action.response[0].ath;
      newState.image = newImage
      newState.name = newName;
      newState.symbol = newSymbol;
      newState.price = currentPrice;
      newState.change = newChange;
      newState.marketCap = newCap;
      newState.volume = newVolume;
      newState.circulatingSup = newCirculatingSup;
      newState.ath = newATH;
      return newState;
    case RECEIVE_COINS:
      let indexImage = action.response[0].image;
      let indexName = action.response[0].name;
      let indexSymbol = action.response[0].symbol;
      let indexcurrentPrice = action.response[0].current_price;
      let indexChange = action.response[0].price_change_percentage_24h;
      let indexCap = action.response[0].market_cap;
      newState.image = indexImage
      newState.name = indexName;
      newState.symbol = indexSymbol;
      newState.price = indexcurrentPrice;
      newState.change = indexChange;
      newState.marketCap = indexCap;
      return newState;
    default:
      return state;
  }
};

export default detailsReducer;