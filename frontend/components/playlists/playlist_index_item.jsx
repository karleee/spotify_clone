import React from 'react';
import { Link } from 'react-router-dom';

class PlaylistIndexItem extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.handleTrack = this.handleTrack.bind(this);
    this.play = this.play.bind(this);
  }

  handleClick(e) {
    if (e.target.classList.contains("circle")) {
      this.props.history.push(`/home`);
    }
  }

  handleTrack() {
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
          <div className="playlist-thumbnail-wrapper" onClick={this.handleClick}> 
            <div className="thumbnail">
              <Link to={`/playlist/${playlist.id}`}>
                <img src={playlist.photo_url} alt="Playlist thumbnail" />
                <p>{playlist.title}</p>
                <p>By {playlist.user}</p> 
              </Link>
            </div>

            <div className="play-button">
            <div className="triangle right" onClick={this.play}></div> 
              <div className="circle"></div>
            </div>
          </div>
        </li>
    );
  }
}
 
export default PlaylistIndexItem;  