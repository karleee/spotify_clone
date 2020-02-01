import React from 'react';
import PlaylistIndexItem from '../playlists/playlist_index_item';

class HeavyRotationIndex extends React.Component {
  componentDidMount() {
    this.props.requestAllPlaylists();
  }

  render() {
    const { playlists } = this.props;
    return (
      <div className="home-index-heavy-rotation">  
        <div className="heavy-rotation-header">
          <h1>Home</h1>
          <h2>Your heavy rotation</h2>
        </div> 

        <div className="heavy-rotation-playlists">
          <ul>
            {playlists.map(playlist => <PlaylistIndexItem key={playlist.id} playlist={playlist} />)}
          </ul>
        </div>
      </div>
    )
  }
}

export default HeavyRotationIndex;