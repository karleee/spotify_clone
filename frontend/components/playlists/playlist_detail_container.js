import { connect } from 'react-redux';
import { requestAllPlaylists } from '../../actions/playlist_actions';
import { requestAllTracks, receiveCurrentTrack, receiveNextTrack } from '../../actions/track_actions';
import { receiveTitle, receiveArtist, receivePlaylistId, receiveAlbumId, receiveIsPlaying } from '../../actions/audio_actions';
import { selectTracksFromPlaylist } from '../../reducers/selectors';
import PlaylistDetail from './playlist_detail';

const mapStateToProps = (state, ownProps) => { 
  // Retrieving stored values from local storage
  const playlists = JSON.parse(localStorage.getItem('playlists'));
  const playlist = playlists[ownProps.match.params.playlistId];
  let tracks = selectTracksFromPlaylist(state, playlist);

  // Before assigning to props check if tracks contains invalid values
  // If so, default to tracks in local storage
  const isInvalid = ele => ele === undefined || ele === null;
  if (tracks.some(isInvalid) || !tracks) tracks = JSON.parse(localStorage.getItem('playlist_tracks'));
   
  return ({
    playlist,
    tracks,
    isPlaying: state.ui.isPlaying
  });
};

const mapDispatchToProps = dispatch => ({
  requestAllPlaylists: () => dispatch(requestAllPlaylists()),
  requestAllTracks: () => dispatch(requestAllTracks()),
  receiveCurrentTrack: track => dispatch(receiveCurrentTrack(track)),
  receiveNextTrack: track => dispatch(receiveNextTrack(track)),
  receiveTitle: title => dispatch(receiveTitle(title)),
  receiveArtist: artist => dispatch(receiveArtist(artist)),
  receiveAlbumId: albumId => dispatch(receiveAlbumId(albumId)),
  receivePlaylistId: playlistId => dispatch(receivePlaylistId(playlistId)),
  receiveIsPlaying: isPlaying => dispatch(receiveIsPlaying(isPlaying))
});

export default connect(mapStateToProps, mapDispatchToProps)(PlaylistDetail);