export const fetchAllArtists = () => (
  $.ajax({
    method: 'GET',
    url: '/api/artists'
  })
);

export const fetchSingleArtist = id => (
  $.ajax({
    method: 'GET',
    url: `/api/artists/${id}`
  })
);