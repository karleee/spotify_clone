import { connect } from 'react-redux';
import { receiveCurrentTrack, receiveNextTrack } from '../../actions/track_actions';
import AudioPlayer from './audio_player';
import { selectTracksFromPlaylist } from '../../reducers/selectors';

const mapStateToProps = state => {
  let playlist;
  let tracks;

  if (state.audio.playlist_id) {
    playlist = state.entities.playlists[state.audio.playlist_id];
    tracks = selectTracksFromPlaylist(state, playlist);
  } else {
    tracks = null;
  }

  return ({
    audio: state.ui.currentTrack,
    volume: state.audio.volume,
    trackTime: state.audio.trackTime,
    nextTrack: state.ui.nextTrack,
    trackPlaying: state.audio.trackPlaying,
    tracks
  });
}

const mapDispatchToProps = dispatch => ({
  receiveCurrentTrack: track => dispatch(receiveCurrentTrack(track)),
  receiveNextTrack: track => dispatch(receiveNextTrack(track)),
  receiveCurrentTime: time => dispatch(receiveCurrentTime(time))
});

export default connect(mapStateToProps, mapDispatchToProps)(AudioPlayer);