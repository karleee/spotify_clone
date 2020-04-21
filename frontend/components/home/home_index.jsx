import React, {Component} from 'react';
import PlaylistIndexItem from '../playlists/playlist_index_item_container';
import {selectPlaylistsFromType} from '../../reducers/selectors';
// import PlaylistIndexItem from '../playlists/playlist_index_item';

class HomeIndex extends Component {
  constructor(props) {
    super(props);
    this._isMounted = false;
    this.state = {selectedArtistPlaylists: []};
    // Explicity resetting play state to false if the page is manually reloaded
    // Otherwise don't touch it/keep the play state across the site
    window.performance.navigation.type === 1 ? localStorage.setItem('artist_playing', false) : '';
  } 

  // Data fetching when the component mounts
  componentDidMount() { 
    this._isMounted = true;
    this.props.requestAllPlaylists();
    this.props.requestAllArtistPlaylists();
    this.props.requestAllTracks();
    this.props.requestAllAlbums();
    this.props.requestAllArtists();
    this.props.requestAllUsers(); 
  }

  // Setting isMounted to false once component unmounts
  componentWillUnmount() {
    this._isMounted = false;
  }

  // Update the local selected playlists state once all artist playlists have been received
  componentDidUpdate(prevProps) {
    if (prevProps.artistPlaylists !== this.props.artistPlaylists) {
      const selectedArtistPlaylists = this.getSelectedArtistPlaylists(Object.values(this.props.artistPlaylists));
      this.setState({selectedArtistPlaylists});
    }
  }

  // Get random slice of artist playlists
  getSelectedArtistPlaylists(artistPlaylists) {    
    let selectedArtistPlaylists = [];
    while (selectedArtistPlaylists.length < 4) {
      const randomPlaylist = artistPlaylists[Math.floor(Math.random() * artistPlaylists.length)];
      if (!selectedArtistPlaylists.includes(randomPlaylist)) selectedArtistPlaylists.push(randomPlaylist);
    }

    return selectedArtistPlaylists;
  }

  // Renders HomeIndex component
  render() {
    const {users, artists, userPlaylists} = this.props;
    const {selectedArtistPlaylists} = this.state;

    const heavyRotationPlaylists = selectPlaylistsFromType(userPlaylists, 'heavyRotation');

    return (
      <div className="home-index main-container"> 
        <h1>Home</h1>
        
        <div className="home-index heavy-rotation-playlists-wrapper">   
          <h2>Your heavy rotation</h2> 
          <ul> 
            {heavyRotationPlaylists.map(playlist => 
              <PlaylistIndexItem 
                key={playlist.id} 
                playlist={playlist} 
                users={users} 
                artists={artists}
                {...this.props} 
              />)}   
          </ul>
        </div>

        <div className="home-index artist-playlists-wrapper">
          <div className="home-index header-wrapper">
            <h2>Based on your recent listening</h2>
            <p>Inspired by your recent activity.</p>
          </div>

          <ul>
            {selectedArtistPlaylists.map(playlist =>
              <PlaylistIndexItem 
                key={playlist.id} 
                playlist={playlist} 
                users={users}
                artists={artists} 
                {...this.props} 
              />
            )} 
          </ul>
        </div>
      </div>
    )
  }
}

export default HomeIndex; 