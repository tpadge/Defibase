export const fetchCoin = id => (
  $.ajax({
    method: 'GET',
    url: `api/coins/${id}`
  })
);

export const fetchCoins = () => (
  $.ajax({
    method: 'GET',
    url: `api/coins`
  })
)

