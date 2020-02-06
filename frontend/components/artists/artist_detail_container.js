import { connect } from 'react-redux';
import ArtistDetail from './artist_detail';

const mapStateToProps = state => ({
  currentUser: state.entities.users[state.session.id],
  artist: state.entities.artist[ownProps.artistId]
});

const mapDispatchToProps = dispatch => ({

});

export default connect(mapStateToProps, mapDispatchToProps)(ArtistDetail);