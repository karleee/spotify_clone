export const RECEIVE_VOLUME = 'RECEIVE_VOLUME';
export const RECEIVE_TITLE = 'RECEIVE_TITLE';
export const RECEIVE_ARTIST = 'RECEIVE_ARTIST';
export const RECEIVE_PHOTO_URL = 'RECEIVE_PHOTO_URL';
export const RECEIVE_PLAYLIST_ID = 'RECEIVE_PLAYLIST_ID';
export const RECEIVE_ALBUM_ID = 'RECEIVE_ALBUM_ID';
export const RECEIVE_TRACK_PLAYING = 'RECEIVE_TRACK_PLAYING';
export const RECEIVE_CURRENT_TIME = 'RECEIVE_CURRENT_TIME';
export const RECEIVE_IS_PLAYING = 'RECEIVE_IS_PLAYING';

export const receiveVolume = volume => ({
  type: RECEIVE_VOLUME,
  volume
});
 
export const receiveTitle = title => ({
  type: RECEIVE_TITLE,
  title
});

export const receiveArtist = artist => ({
  type: RECEIVE_ARTIST,
  artist
});

export const receivePhotoUrl = photoUrl => ({
  type: RECEIVE_PHOTO_URL, 
  photoUrl
});

export const receivePlaylistId = playlistId => ({
  type: RECEIVE_PLAYLIST_ID,
  playlistId
});

export const receiveAlbumId = albumId => ({
  type: RECEIVE_ALBUM_ID,
  albumId
});

export const receiveTrackPlaying = track => ({
  type: RECEIVE_TRACK_PLAYING,
  track
});

export const receiveCurrentTime = time => ({ 
  type: RECEIVE_CURRENT_TIME,
  time
});

// Testing for global playing state variable...
export const receiveIsPlaying = isPlaying => ({
  type: RECEIVE_IS_PLAYING,
  isPlaying
})