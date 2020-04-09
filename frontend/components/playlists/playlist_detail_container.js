import { connect } from 'react-redux';
import { requestAllPlaylists } from '../../actions/playlist_actions';
import { requestAllTracks, receiveCurrentTrack, receiveNextTrack } from '../../actions/track_actions';
import { receiveTitle, receiveArtist, receivePlaylistId, receiveAlbumId } from '../../actions/audio_actions';
import { selectTracksFromPlaylist } from '../../reducers/selectors';
import PlaylistDetail from './playlist_detail';

const mapStateToProps = (state, ownProps) => { 
  let playlist = state.entities.playlists[ownProps.match.params.playlistId] || JSON.parse(localStorage.getItem('playlist'));
  let tracks = selectTracksFromPlaylist(state, playlist) || JSON.parse(localStorage.getItem('tracks'));

  // Before assigning to props check if tracks contains invalid values
  // If so, default to tracks in local storage
  const isInvalid = ele => ele === undefined || ele === null;
  if (tracks.some(isInvalid) || !tracks) tracks = JSON.parse(localStorage.getItem('tracks'));

  return ({
    playlist,
    tracks
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
  receivePlaylistId: playlistId => dispatch(receivePlaylistId(playlistId))
});

export default connect(mapStateToProps, mapDispatchToProps)(PlaylistDetail);