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
    const { playlists } = this.props;
    
    return (
      <div className="home-container"> 
        <h1>Home</h1>
        
        <div className="heavy-rotation-wrapper">   
          <div className="header"> 
            <h2>Your heavy rotation</h2>
          </div> 

          <div className="playlists">  
            <ul> 
              {playlists.map(playlist => 
                <PlaylistIndexItem key={playlist.id} playlist={playlist} {...this.props} />)}   
            </ul>
          </div>
        </div>
      </div>
    )
  }
}

export default HomeIndex;