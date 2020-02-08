import { connect } from 'react-redux';
import { logout } from '../../actions/session_actions';
import { receiveCurrentTrack, receiveNextTrack } from '../../actions/track_actions';
import { receiveVolume } from '../../actions/audio_actions';
import HeaderNav from './header_nav';

const mapStateToProps = ({ session, entities: { users } }) => ({
  currentUser: users[session.id]
});

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(logout()),
  receiveCurrentTrack: track => dispatch(receiveCurrentTrack(track)),
  receiveNextTrack: track => dispatch(receiveNextTrack(track)),
  // receiveVolume: volume => dispatch(receiveVolume(volume))
});

export default connect(mapStateToProps, mapDispatchToProps)(HeaderNav); 