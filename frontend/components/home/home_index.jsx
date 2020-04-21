import React, {Component} from 'react';
import PlaylistIndexItem from '../playlists/playlist_index_item_container';

class HomeIndex extends Component {
  constructor(props) {
    super(props);
    this._isMounted = false;
    // Explicity resetting play state to false if the page is manually reloaded
    // Otherwise don't touch it/keep the play state across the site
    window.performance.navigation.type === 1 ? localStorage.setItem('artist_playing', false) : '';
  } 

  componentDidMount() { 
    this._isMounted = true;
    this.props.requestAllPlaylists();
    this.props.requestAllArtistPlaylists();
    this.props.requestAllTracks();
    this.props.requestAllAlbums();
    this.props.requestAllArtists();
    this.props.requestAllUsers(); 
  }

  componentWillUnmount() {
    this._isMounted = false;
  }

  // Get random slice of artist playlists
  // getSelectedArtistPlaylists(artistPlaylists) {    
  //   let selectedArtistPlaylists = [];
  //   while (selectedArtistPlaylists.length < 4) {
  //     const randomPlaylist = artistPlaylists[Math.floor(Math.random() * artistPlaylists.length)];
  //     if (!selectedArtistPlaylists.includes(randomPlaylist)) selectedArtistPlaylists.push(randomPlaylist);
  //   }

  //   return selectedArtistPlaylists;
  // }

  render() {
    const {users, artists, heavyRotation, artistPlaylists} = this.props;

    return (
      <div className="home-index main-container"> 
        <h1>Home</h1>
        
        <div className="home-index heavy-rotation-playlists-wrapper">   
          <h2>Your heavy rotation</h2> 
          <ul> 
            {heavyRotation.map(playlist => 
              <PlaylistIndexItem key={playlist.id} playlist={playlist} users={users} {...this.props} />)}   
          </ul>
        </div>

        <div className="home-index artist-playlists-wrapper">
          <div className="home-index header-wrapper">
            <h2>Based on your recent listening</h2>
            <p>Inspired by your recent activity.</p>
          </div>

          <ul>
            {Object.values(artistPlaylists).slice(0, 4).map(playlist =>
              <PlaylistIndexItem key={playlist.id} playlist={playlist} artists={artists} {...this.props} />
            )} 
          </ul>
        </div>
      </div>
    )
  }
}

export default HomeIndex;