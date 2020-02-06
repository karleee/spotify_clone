import { connect } from 'react-redux';
import { receiveTitle } from '../../actions/audio_actions';
import SearchIndex from './search_index'; 

const mapStateToProps = state => ({
  currentUser: state.entities.users[state.session.id],
  values: Object.values(state.entities.albums).concat(Object.values(state.entities.playlist)).concat(Object.values(state.entities.artist))
});

const mapDispatchToProps = dispatch => ({
  receiveTitle: title => dispatch(receiveTitle(title)),
  receiveArtist: artist => dispatch(receiveArtist(artist))
});

 export default connect(mapStateToProps, mapDispatchToProps)(SearchIndex); 