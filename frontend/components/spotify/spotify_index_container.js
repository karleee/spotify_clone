import { connect } from "react-redux";
import { logout } from '../../actions/session_actions';
import SpotifyIndex from './spotify_index';

const mapStateToProps = ({ session, entities: { users } }) => ({
  currentUser: users[session.id]
});

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(logout())
});

export default connect(mapStateToProps, mapDispatchToProps)(SpotifyIndex);