import React from 'react';
import UserIndexItem from './user_index_item_container';

class UserIndex extends React.Component {
  constructor(props) {
    super(props);
    console.log(this.props.tracks);
  }

  render() {
    const { user, playlists } = this.props;
 
    return(
      <div className="user-index-container">
        <div className="header">
          <h1>{ user.username }</h1> 
          <h2>Public Playlists</h2> 
        </div>

        <div className="playlists">
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
      </div>
    );
  }
}

export default UserIndex;