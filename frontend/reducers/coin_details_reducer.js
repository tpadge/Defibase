import { RECEIVE_COIN, RECEIVE_COINS} from '../actions/coin_actions';
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
  ath: null,
  writeup: null,
  athdate: null,
  website: null,
  trade: null
});

const detailsReducer = (state = _nullDetails, action) => {
  Object.freeze(state);
  let newState = merge({}, state);

  switch (action.type) {
    case RECEIVE_COIN:
      let newImage = action.response.image.large;
      let newName = action.response.name;
      let newSymbol = action.response.symbol;
      let currentPrice = action.response.market_data.current_price.usd;
      let newChange = action.response.market_data.price_change_percentage_30d;
      let newCap = action.response.market_data.market_cap.usd;
      let newVolume = action.response.market_data.total_volume.usd;
      let newCirculatingSup = action.response.market_data.circulating_supply;
      let newATH = action.response.market_data.ath.usd;
      let newWriteup = action.response.description.en;
      let newATHdate = action.response.market_data.ath_date.usd;
      let newWebsite = action.response.links.homepage[0];
      let newTrade = action.response.tickers[8].trade_url;
      newState.image = newImage
      newState.name = newName;
      newState.symbol = newSymbol;
      newState.price = currentPrice;
      newState.change = newChange;
      newState.marketCap = newCap;
      newState.volume = newVolume;
      newState.circulatingSup = newCirculatingSup;
      newState.ath = newATH;
      newState.writeup = newWriteup;
      newState.athdate = newATHdate;
      newState.website = newWebsite;
      newState.trade = newTrade;
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