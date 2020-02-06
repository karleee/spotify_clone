import { connect } from 'react-redux';
import { receiveTitle } from '../../actions/audio_actions';
import SearchIndex from './search_index'; 

const mapStateToProps = state => ({

});

const mapDispatchToProps = dispatch => ({
  receiveTitle: title => dispatch(receiveTitle(title)),
  receiveArtist: artist => dispatch(receiveArtist(artist))
});

 export default connect(mapStateToProps, mapDispatchToProps)(SearchIndex); 