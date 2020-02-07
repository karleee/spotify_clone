import React from 'react';
import { Link } from 'react-router-dom';

class SearchResultIndex extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      result: true,
      playlist: false
    }
    this.toggleResult = this.toggleResult.bind(this);
  }

  toggleResult(e) {
    if (this.state.result === false) {
      this.setState({ result: true });
      this.setState({ playlist: false }); 
    }
  }

  togglePlaylist() {
    if (this.state.playlist === false) {
      this.setState({ playlist: true });
      this.setState({ result: false });
    }
  }

  render() {    
    let result;
    let album;
    let link;
    let creator;
    let photoUrl;
    let { tracks } = this.props;

    if (this.props.artists.length > 0) {
      result = this.props.artists[0];
      creator = result.name;
      photoUrl = result.photo_url;
      link = `artist/${result.id}`;
    } else if (this.props.albums.length > 0) {
      result = this.props.albums[0];
      creator = result.artist;
      photoUrl = result.photo_url;
      link = `album/${result.id}`;
    } else if (this.props.playlists.length > 0) {
      result = this.props.playlists[0];
      creator = result.user;
      photoUrl = result.photo_url;

      if (tracks.length == 0) {
        tracks = -1;
      }
      link = `playlist/${result.id}`;
    }  else if (this.props.tracks.length > 0) {
      result = this.props.tracks[0];
      album = this.props.allAlbums[result.album_id - 1];
      creator = result.artist;
      photoUrl = album.photo_url;
      link = `album/${album.id}`;
    }

    if (!result) return null;

    return (
      <div className="results-wrapper">
        <div className="header">
          <ul>
            <li onClick={this.toggleResult.bind(this)}>Top result</li>
            <li onClick={this.togglePlaylist.bind(this)}>Songs</li>
          </ul>
        </div>

        {this.state.result ? <div className="results-wrapper">
          <div className="result">
            <img className={ result.album_id ? "result-track" : "result-other" } src={photoUrl} alt="Thumbnail photo" />
            <Link to={link}>{result.title ? result.title : creator}</Link>
            {result.name ? <div className="label"><p>Artist</p></div> : "" }
            {result.playlist_type ? <div className="label"><p>Playlist</p></div> : ""}
            {result.album_id ? <div className="label"><p>Song</p></div> : ""}
          </div>

          <div className="tracks-wrapper">
            <ul>
              {this.props.tracks.map(track => 
                <li key={track.id}>
                  <div className="tracks">
                    <div className="image">
                      <img src={this.props.allAlbums[track.album_id - 1].photo_url} alt="Album cover"/> 
                    </div>

                    <div className="track-text">
                        <p>{track.title}</p>
                        <p>{track.artist} • {track.album}</p>
                    </div>
                  </div> 
                </li>
              )}
            </ul>
          </div>
        </div> : "" }
      </div>
    );
  }
}

export default SearchResultIndex;