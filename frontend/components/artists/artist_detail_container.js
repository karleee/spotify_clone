import { connect } from 'react-redux';
import ArtistDetail from './artist_detail';

import { selectTracksFromArtist } from '../../reducers/selectors';

const mapStateToProps = (state, ownProps) => {
  // Get all artists from either state or local storage
  // Get the artist and their tracks
  const artists = JSON.parse(localStorage.getItem('artists'))
  const artist = artists[ownProps.match.params.artistId];
  let tracks = selectTracksFromArtist(state, artist);

  // Before assigning to props check if tracks contains invalid values
  // If so, default to tracks in local storage
  const isInvalid = ele => ele === undefined || ele === null;
  if (tracks.some(isInvalid) || !tracks) tracks = JSON.parse(localStorage.getItem('artist_tracks'));

  return ({
    artist,
    tracks
  });
};

const mapDispatchToProps = dispatch => ({ 

});

export default connect(mapStateToProps, mapDispatchToProps)(ArtistDetail);