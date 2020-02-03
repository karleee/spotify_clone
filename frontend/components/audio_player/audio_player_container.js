import { connect } from 'react-redux';
import AudioPlayer from './audio_player';

const mapStateToProps = (state, ownProps) => ({
  audio: ownProps.track.audio_url
});

const mapDispatchToProps = dispatch => ({

});

export default connect(mapStateToProps, mapDispatchToProps)(AudioPlayer);