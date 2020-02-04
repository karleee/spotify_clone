import { connect } from 'react-redux';
import { receiveVolume } from '../../actions/audio_actions';
import AudioVolume from './audio_volume';

const mapStateToProps = state => ({
  volume: state.audio.volume
});

const mapDispatchToProps = dispatch => ({
  receiveVolume: volume => dispatch(receiveVolume(volume))
});

export default connect(mapStateToProps, mapDispatchToProps)(AudioVolume);
