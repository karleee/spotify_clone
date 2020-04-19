// Fetch all artist playlists
export const fetchAllArtistPlaylists = () => (
  $.ajax({
    method: 'GET',
    url: '/api/artist_playlists'
  })
); 