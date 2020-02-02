export const RECEIVE_ALL_TRACKS = 'RECEIVE_ALL_TRACKS';
export const RECEIVE_SINGLE_TRACK = 'RECEIVE_SINGLE_TRACK';
// export const RECEIVE_CURRENT_SONG = 'RECEIVE_CURRENT_SONG';
// export const RECEIVE_NEXT_SONG = 'RECEIVE_NEXT_SONG';
import * as TrackAPIUtil from '../util/tracks_api_util';

export const receiveAllTracks = tracks => ({
  type: RECEIVE_ALL_TRACKS,
  tracks
});

export const receiveSingleTrack = track => ({
    type: RECEIVE_SINGLE_TRACK,
    track
});


// export const receiveCurrentSong = song => ({
//   type: RECEIVE_CURRENT_SONG,
//   song
// });

// export const receiveNextSong = song => ({
//   type: RECEIVE_NEXT_SONG,
//   song
// });

export const requestAllTracks = () => dispatch => (
  TrackAPIUtil.fetchAllTracks() 
    .then(tracks => dispatch(receiveAllTracks(tracks))
  )
);

export const requestSingleTrack = id => dispatch => (
  TrackAPIUtil.fetchSingleTrack(id)
    .then(track => dispatch(receiveSingleTrack(track))
  )
);