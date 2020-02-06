import { connect } from 'react-redux';
import { receiveCurrentTrack, receiveNextTrack } from '../../actions/track_actions';
import { receiveTitle, receiveArtist, receivePlaylistId, receiveAlbumId } from '../../actions/audio_actions';
import { selectTracksFromPlaylist } from '../../reducers/selectors';
import PlaylistDetail from './playlist_detail';

const mapStateToProps = (state, ownProps) => { 
  const playlist = state.entities.playlists[ownProps.match.params.playlistId]; 

  return ({
    playlist,
    tracks: selectTracksFromPlaylist(state, playlist),
  });
};

const mapDispatchToProps = dispatch => ({
  receiveCurrentTrack: track => dispatch(receiveCurrentTrack(track)),
  receiveNextTrack: track => dispatch(receiveNextTrack(track)),
  receiveTitle: title => dispatch(receiveTitle(title)),
  receiveArtist: artist => dispatch(receiveArtist(artist)),
  receiveAlbumId: albumId => dispatch(receiveAlbumId(albumId)),
  receivePlaylistId: playlistId => dispatch(receivePlaylistId(playlistId))
});

export default connect(mapStateToProps, mapDispatchToProps)(PlaylistDetail);