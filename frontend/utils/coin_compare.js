import { $CombinedState } from "redux"

export const getPrice = symbol => (
  $.ajax({
    url: `https://min-api.cryptocompare.com/data/price?fsym=${symbol}&tsyms=USD&api_key={ff73037003af7fd568bf3cc8ed0e979c3d7731cb6b791d48be1c2fd2b88a0fb9}`,
    method: 'GET'
  })
);