import React from 'react';
import UserIndexItem from './user_index_item_container';

class UserIndex extends React.Component {
  constructor(props) {
    super(props); 

    // Explicity resetting play state to false if the page is manually reloaded
    // Otherwise don't touch it/keep the play state across the site
    window.performance.navigation.type === 1 ? localStorage.setItem('artist_playing', false) : '';
  }

  render() {
    const { user, playlists } = this.props;
 
    return(
      <div className="user-index-container">
        <div className="header">
          <h1>{ user.username }</h1> 
          <h2>Public Playlists</h2> 
        </div>

        <ul>
          { playlists.map(playlist => 
            <UserIndexItem 
              key={ playlist.id } 
              playlist={ playlist }
              requestSinglePlaylist={ this.props.requestSinglePlaylist }
              receiveCurrentTrack={ this.props.receiveCurrentTrack }
              receiveNextTrack = { this.props.receiveNextTrack }
              receiveTitle={ this.props.receiveTitle }
              receiveArtist={ this.props.receiveArtist }
              receivePlaylistId={ this.props.receivePlaylistId }
              receiveAlbumId={ this.props.receiveAlbumId } 
              {...this.props}
            />)
          }
        </ul>
      </div>
    );
  }
}

export default UserIndex;