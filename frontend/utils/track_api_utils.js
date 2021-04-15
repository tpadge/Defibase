export const fetchTracks = () => (
  $.ajax({
    method: 'GET',
    url: '/api/tracked_coins',
  })
);

export const addTrack = (coin) => (
  $.ajax({
    method: 'POST',
    url: `/api/tracked_coins`,
    data: { coin } 
  })
);

export const deleteTrack = id => (
  $.ajax({
    method: 'DELETE',
    url: `/api/tracked_coins/${id}`
  })
)