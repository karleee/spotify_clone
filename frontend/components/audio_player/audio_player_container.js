import { connect } from 'react-redux';
import { receiveCurrentTrack, receiveNextTrack } from '../../actions/track_actions';
import AudioPlayer from './audio_player';
import { selectTracksFromPlaylist } from '../../reducers/selectors';
import { receiveTitle, receiveArtist, receivePlaylistId, receiveAlbumId } from '../../actions/audio_actions';

const mapStateToProps = state => {
  const playlists = JSON.parse(localStorage.getItem('playlists'));
  let tracks;

  if (state.audio.playlist_id) {
    const playlist = playlists[state.audio.playlist_id];
    tracks = selectTracksFromPlaylist(state, playlist);
  } else {
    tracks = null;
  }

  return ({
    audio: state.ui.currentTrack,
    volume: state.audio.volume,
    nextTrack: state.ui.nextTrack, 
    trackPlaying: state.audio.trackPlaying,
    tracks
  });
}

const mapDispatchToProps = dispatch => ({
  receiveCurrentTrack: track => dispatch(receiveCurrentTrack(track)),
  receiveNextTrack: track => dispatch(receiveNextTrack(track)),
  receiveTitle: title => dispatch(receiveTitle(title)),
  receiveArtist: artist => dispatch(receiveArtist(artist)),
  receivePlaylistId: playlistId => dispatch(receivePlaylistId(playlistId)), 
  receiveAlbumId: albumId => dispatch(receiveAlbumId(albumId))
});

export default connect(mapStateToProps, mapDispatchToProps)(AudioPlayer);