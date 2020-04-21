// Gets the playlists based on type
export const selectPlaylistsFromType = (playlists, type) => (
  Object.values(playlists).filter(playlist => playlist.playlist_type === type)
);  

// Gets the playlists from a user
export const selectPlaylistsFromUser = (playlists, user) => (
  Object.values(playlists).filter(playlist => playlist.user_id === user.id)
); 

// Gets the playlist from an artist
export const selectPlaylistFromArtist = (playlists, artist) => (
  Object.values(playlists).filter(playlist => playlist.artist_id === artist.id) 
); 
 
// Gets the tracks from an artist's playlist
export const selectTracksFromArtistPlaylist = (tracks, playlist) => (
  playlist.track_ids ? playlist.track_ids.map(id => tracks[id - 1]) : [] 
); 

// Gets the tracks from a playlist
export const selectTracksFromPlaylist = (state, playlist) => (
  playlist.track_ids ? playlist.track_ids.map(id => state.entities.tracks[id]) : []     
); 