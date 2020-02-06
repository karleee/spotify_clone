import React from 'react';
import PlaylistIndexItem from '../playlists/playlist_index_item';
import AudioPlayer from '../audio_player/audio_player';

class HomeIndex extends React.Component {
  componentDidMount() { 
    this.props.requestAllPlaylists();
    this.props.requestAllTracks();
    this.props.requestAllAlbums();
    this.props.requestAllArtists();
    this.props.requestAllUsers();
  }

  render() {
    const { playlists } = this.props;
    return (
      <div className="home-container">
        <div className="heavy-rotation-container">  
          <div className="heavy-rotation-header">
            <h1>Home</h1>
            <h2>Your heavy rotation</h2>
          </div> 

          <div className="heavy-rotation-content">
            <ul> 
              {playlists.map(playlist => <PlaylistIndexItem key={playlist.id} playlist={playlist} />)}
            </ul>
          </div>
        </div>
      </div>
    )
  }
}

export default HomeIndex;