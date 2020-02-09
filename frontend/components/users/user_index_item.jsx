import React from 'react';
import { withRouter } from 'react-router-dom';
import { Link } from 'react-router-dom';

class UserIndexItem extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.handleTrack = this.handleTrack.bind(this);
    this.play = this.play.bind(this);
  } 

  handleClick(e) {
    if (!e.target.classList.contains("circle")) { 
      this.props.history.push(`/playlist/${this.props.playlist.id}`);    
    }
  }

  handleTrack() {
    if (!this.props.tracks) return;
    const { playlist, tracks } = this.props;
    let currentTrack = tracks[0];
    let nextTrack = tracks[1];
    this.props.receiveCurrentTrack(currentTrack);
    this.props.receiveNextTrack(nextTrack);
    this.props.receiveTitle(currentTrack.title);
    this.props.receiveArtist(currentTrack.artist);
    this.props.receiveAlbumId(currentTrack.album_id);
    this.props.receivePlaylistId(playlist.id);
  }

  play() {
    const { playlist } = this.props;
    this.handleTrack(playlist);
    this.props.receivePlaylistId(playlist.id);
  }

  render() {
    const { playlist } = this.props;

    return (
        <li>
          <div className="playlist-image" onClick={ this.handleClick }>
            <div className="play-button" onClick={ this.play }> 
              <div className="triangle right"></div> 
              <div className="circle"></div>
            </div>

            <div className="overlay"></div>
            <img src={playlist.photo_url} alt="Playlist thumbnail" onClick={ this.handleClick }/>
          </div>

          <div className="playlist-name">
            <Link to={`/playlist/${playlist.id}`}>{ playlist.title}</Link> 
          </div>
        </li>
    );
  }
}

export default withRouter(UserIndexItem);  