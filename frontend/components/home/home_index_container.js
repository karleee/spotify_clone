import { connect } from "react-redux";
import { logout } from '../../actions/session_actions';
import HomeIndex from './home_index';

const mapStateToProps = ({ session, entities: { users } }) => ({
  currentUser: users[session.id]
});

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(logout())
});

export default connect(mapStateToProps, mapDispatchToProps)(HomeIndex);