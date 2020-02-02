export const fetchAllAlbums = () => (
  $.ajax({
    method: 'GET',
    url: '/api/albums'
  })
);

export const fetchSingleAlbum = id => (
  $.ajax({
    method: 'GET',
    url: `/api/albums/${id}`
  })
);