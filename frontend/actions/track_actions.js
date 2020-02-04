export const RECEIVE_ALL_TRACKS = 'RECEIVE_ALL_TRACKS';
export const RECEIVE_SINGLE_TRACK = 'RECEIVE_SINGLE_TRACK';
export const RECEIVE_CURRENT_TRACK = 'RECEIVE_CURRENT_TRACK';
export const RECEIVE_NEXT_TRACK = 'RECEIVE_NEXT_TRACK';
import * as TrackAPIUtil from '../util/tracks_api_util';

export const receiveAllTracks = tracks => ({
  type: RECEIVE_ALL_TRACKS,
  tracks
});

export const receiveSingleTrack = track => ({
    type: RECEIVE_SINGLE_TRACK,
    track 
});


export const receiveCurrentTrack = track => ({
  type: RECEIVE_CURRENT_TRACK,
  track
});

export const receiveNextTrack = track => ({
  type: RECEIVE_NEXT_TRACK,
  track
});

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