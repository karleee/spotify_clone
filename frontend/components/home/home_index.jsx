import React from 'react';
import PlaylistIndexItem from '../playlists/playlist_index_item_container';

class HomeIndex extends React.Component {
  constructor(props) {
    super(props);
    this.state = {selectedArtistPlaylists: []};
    // Explicity resetting play state to false if the page is manually reloaded
    // Otherwise don't touch it/keep the play state across the site
    window.performance.navigation.type === 1 ? localStorage.setItem('artist_playing', false) : '';
  }

  componentDidMount() { 
    this.props.requestAllPlaylists();
    this.props.requestAllArtistPlaylists();
    this.props.requestAllTracks();
    this.props.requestAllAlbums();
    this.props.requestAllArtists();
    this.props.requestAllUsers(); 

    // Leave one second in between data fetching and state setting to avoid
    // undefined values for playlists
    setTimeout(() => {
      this.getSelectedArtistPlaylists();
    }, 700);
  }

  // Get random slice of artist playlists
  getSelectedArtistPlaylists() {
    const {artistPlaylists} = this.props;
    
    let selectedArtistPlaylists = [];
    while (selectedArtistPlaylists.length < 4) {
      const randomPlaylist = artistPlaylists[Math.floor(Math.random() * artistPlaylists.length)];
      if (!selectedArtistPlaylists.includes(randomPlaylist)) selectedArtistPlaylists.push(randomPlaylist);
    }

    this.setState({selectedArtistPlaylists});
  }

  render() {
    const {users, artists, heavyRotation} = this.props;
    const {selectedArtistPlaylists} = this.state;

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
            {selectedArtistPlaylists.includes(undefined) ? <li></li> : selectedArtistPlaylists.map(playlist =>
              <PlaylistIndexItem key={playlist.id} playlist={playlist} artists={artists} {...this.props} />
            )} 
          </ul>
        </div>
      </div>
    )
  }
}

export default HomeIndex;