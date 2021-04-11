import { $CombinedState } from "redux"

export const getPrice = symbol => (
  $.ajax({
    url: `https://min-api.cryptocompare.com/data/price?fsym=${symbol}&tsyms=USD&api_key={ff73037003af7fd568bf3cc8ed0e979c3d7731cb6b791d48be1c2fd2b88a0fb9}`,
    method: 'GET'
  })
);

export const getList = () => (
  $.ajax({
    url: `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&category=decentralized_finance&order=market_cap_desc&per_page=50&page=1&sparkline=true&price_change_percentage=24h
`,
    method: 'GET'
  })
)

export const getDetails = name => (
  $.ajax({
    url: `https://api.coingecko.com/api/v3/coins/${name}?tickers=true&market_data=true&community_data=false&developer_data=false&sparkline=true`,
    method: 'GET'
  })
);

export const getChart = name => (
  $.ajax({
    url: `https://api.coingecko.com/api/v3/coins/${name}/market_chart?vs_currency=usd&days=30&interval=daily`,
    method: 'GET'
  })
);