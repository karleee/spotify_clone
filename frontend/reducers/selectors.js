export const selectPlaylistsFromType = (state, playlistType) => (
  Object.values(state.entities.playlists).filter(playlist => playlist.playlist_type === playlistType)
);