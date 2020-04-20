import React from 'react';
import PlaylistIndexItem from '../playlists/playlist_index_item_container';

class HomeIndex extends React.Component {
  constructor(props) {
    super(props);

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
  }

  render() {
    const { users, artists, heavyRotation, artistPlaylists } = this.props;
    let user;
    console.log('Artist Playlists: ' + JSON.stringify(artistPlaylists));
    if (artistPlaylists.length > 0 && !artistPlaylists.includes(undefined)) {
      const index = artistPlaylists[Math.floor(Math.random() * artistPlaylists.length)];
      console.log('Index: ' + index);
      user = artistPlaylists[index];
    } else {
      user = 'hi';
    }
    console.log(user);
    
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
            {artistPlaylists.slice(0, 5).map(playlist =>
              <PlaylistIndexItem key={playlist.id} playlist={playlist} artists={artists} {...this.props} />
            )} 
          </ul>
        </div>
      </div>
    )
  }
}

export default HomeIndex;