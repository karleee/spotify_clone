import { connect } from 'react-redux';
import { login, signup, clearErrors } from '../../actions/session_actions';
import SessionForm from './session_form';

const mapStateToProps = ({ errors }) => ({
  errors: errors.session,
  formType: 'Sign Up'
});

const mapDispatchToProps = dispatch => ({
  processForm: user => dispatch(signup(user)), 
  clearErrors: () => dispatch(clearErrors()),
  demoLogin: user => dispatch(login(user))
});

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm);