import { connect } from 'react-redux';
import SearchResultIndex from './search_result_index';

const mapStateToProps = (state, ownProps) => {
  let tracks = [];
  let albums = [];
  let playlists = [];
  let artists = [];

  if (ownProps.query.length != 1 && ownProps.found.length >= 1) {
    ownProps.found.map(result => {
      if (result.name) {
        artists.push(result);
      } else {
        if (result.ord) {
          tracks.push(result);
        } else if (result.artist) {
          albums.push(result);
        } else if (result.playlist_type) {
          playlists.push(result);
        } 
      }
    });
  }

  tracks = tracks.slice(0, 3);
  
  return {
    albums,
    playlists,
    artists,
    tracks,
    allAlbums: Object.values(state.entities.albums)
  };
};

export default connect(mapStateToProps)(SearchResultIndex);