export const selectPlaylistsFromType = (state, playlistType) => (
  Object.values(state.entities.playlists).filter(playlist => playlist.playlist_type === playlistType)
);

export const selectTracksFromPlaylist = (state, playlist) => (
  playlist ? playlist.trackIds.map(id => state.entities.tracks[id]) : []
);