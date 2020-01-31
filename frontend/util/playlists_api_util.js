export const fetchAllPlaylists = () => (
  $.ajax({
    method: 'GET', 
    url: '/api/playlists'
  })
);

export const fetchSinglePlaylist = id => (
  $.ajax({
    method: 'GET',
    url: `/api/playlists/${id}`
  })
);

export const deletePlaylist = id => (
  $.ajax({
    method: 'DELETE',
    url: `/api/playlists/${id}`
  })
);