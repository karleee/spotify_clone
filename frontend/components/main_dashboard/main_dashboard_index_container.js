import { connect } from "react-redux";
import { logout } from '../../actions/session_actions';
import MainDashboardIndex from './main_dash_index';

const mapStateToProps = ({ session, entities: { users } }) => ({
  currentUser: users[session.id]
});

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(logout())
});

export default connect(mapStateToProps, mapDispatchToProps)(MainDashboardIndex);
