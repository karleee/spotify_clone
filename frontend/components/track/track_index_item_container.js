import { connect } from 'react-redux';
import TrackIndexItem from './track_index_item';

const mapStateToProps = (state, ownParams) => ({
  track: ownParams.track
});

export default connect(mapStateToProps)(TrackIndexItem);