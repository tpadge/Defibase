export const fetchFullDetails = name => (
  $.ajax({
    method: 'GET',
    url: `https://api.coingecko.com/api/v3/coins/${name}?tickers=true&market_data=true&community_data=false&developer_data=false&sparkline=true`,
  })
);

export const fetchBasicDetails = name => (
  $.ajax({
    method: 'GET',
    url: `https://api.coingecko.com/api/v3/simple/price?ids=${name}&vs_currencies=usd&include_market_cap=true&include_24hr_vol=false&include_24hr_change=true`
  })
)