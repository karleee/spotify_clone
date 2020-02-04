export const selectPlaylistsFromType = (state, playlistType) => (
  Object.values(state.entities.playlists).filter(playlist => playlist.playlist_type === playlistType)
);

export const selectTracksFromPlaylist = (state, playlist) => (
  playlist.track_ids ? playlist.track_ids.map(id => state.entities.tracks[id]) : []   
); 

export const selectTracksFromAlbum = (state, album) => (
  album.track_ids ? album.track_ids.map(id => state.entities.tracks[id]) : []
); 

export const selectTracksFromArtist = (state, artist) => (
  artist.track_ids ? artist.track_ids.map(id => state.entities.tracks[id]) : []  
); 

export const selectArtistFromName = (state, name) => {
  let artists = Object.values(state.entities.artist);
  let i = 0;
  while (i < artists.length) {
    if (artists[i].name === name) {
      return artists[i];
    }
    i++;
  }
}