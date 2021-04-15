export const fetchHolding = id => (
  $.ajax({
    method: 'GET',
    url: `/api/holdings/${id}`
  })
);

export const fetchHoldings = () => (
  $.ajax({
    method: 'GET',
    url: '/api/holdings'
  })
);

export const createHolding = (name, userId, quantity) => (
  $.ajax({
    method: 'POST',
    url: '/api/holdings',
    data: {holding: {name: name, user_id: userId, quantity}}
  })
);

export const updateHolding = (id, nextQuantity) => (
  $.ajax({
    method: 'PATCH',
    url: `/api/holdings/${id}`,
    data: {quantity: nextQuantity}
  })
);

export const deleteHolding = id => (
  $.ajax({
    method: 'DELETE',
    url: `/api/holdings/${id}`
  })
)