import { connect } from 'react-redux';
import UserIndexItem from './user_index_item';
import { selectTracksFromPlaylist } from '../../reducers/selectors'; 

const mapStateToProps = (state, { playlist }) => {
  const tracks = selectTracksFromPlaylist(state, playlist);

  return ({
    playlist,
    tracks
  });
}

export default connect(mapStateToProps)(UserIndexItem);