import React from 'react';
import { Link } from 'react-router-dom';

class PlaylistIndexItem extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    if (e.target.className === 'playlist play-icon-wrapper') this.props.history.push(`/home`);
  }

  handleAudio(e) {
    // Get the current audio tag on the page (the current song playing)
    const { playlist, tracks } = this.props;
    const audio = document.getElementById("audio");

    // Toggle global isPlaying state based on play or pause button press for icon change
    const parent = e.target.parentElement;
    // console.log(parent.parentElement.className);
    const isPlaying = parent.parentElement.className === 'playlist-item pause-button control-container' ? false : true;
    this.props.receiveIsPlaying(isPlaying);

    // Play and pause the audio when buttons are clicked 
    if (isPlaying) {
      audio.play();
    } else {
      audio.pause();
    }
  
    // Setting current and next track
    this.props.receivePlaylistId(playlist.id);
    let currentTrack = tracks[0];
    let nextTrack = tracks[1];
    this.props.receiveCurrentTrack(currentTrack);
    this.props.receiveNextTrack(nextTrack);
    this.props.receiveTitle(currentTrack.title);
    this.props.receiveArtist(currentTrack.artist);
    this.props.receiveAlbumId(currentTrack.album_id);
    this.props.receivePlaylistId(playlist.id);
  }

  render() {
    const { playlist, currentTrack, isPlaying } = this.props;

    // Determine class name for button based on play or pause
    const buttonType = isPlaying && playlist.track_ids[0] === currentTrack.id ? 'pause-button' : 'play-button';
    const buttonIcon = isPlaying && playlist.track_ids[0] === currentTrack.id  ? 'pause-icon' : 'play-icon';

    return (
        <li>
          <div className="playlist-thumbnail-wrapper" onClick={e => this.handleClick(e)}> 
            <div className="thumbnail">
              <Link to={`/playlist/${playlist.id}`}>
                <img src={playlist.photo_url} alt="Playlist thumbnail" />
                <p>{playlist.title}</p>
                <p>By {playlist.user}</p> 
              </Link>
            </div>

            <div className={`playlist-item ${buttonType} control-container`}>
              <div className="playlist-item circle-icon-wrapper">
                <div className={`playlist ${buttonIcon}-wrapper`} onClick={e => this.handleAudio(e)}></div>  
              </div>
            </div>
          </div>
        </li>
    );
  }
}
 
export default PlaylistIndexItem;  