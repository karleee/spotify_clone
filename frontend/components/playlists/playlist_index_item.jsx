import React from 'react';
import { Link } from 'react-router-dom';

class PlaylistIndexItem extends React.Component {
  constructor(props) {
    super(props);
  }

  handleThumbnailClick(e) {
    if (e.target.className === 'playlist play-icon-wrapper') this.props.history.push(`/home`);
  }

  handleAudio(e) {
    const { playlist, tracks } = this.props;
    const clickedClass = e.target.className;
    const buttonClass = 'playlist pause-icon-wrapper';

    // Setting the playlist tracks and active playlist in localStorage
    localStorage.setItem('playlist_tracks', JSON.stringify(tracks));
    localStorage.setItem('active_playlist', JSON.stringify(playlist));

    // Call play function with event, all tracks, and targeted button class name
    this.play(tracks, clickedClass, buttonClass);
  }

  play(tracks, clickedClass, buttonClass) {
    // Get the current and next track
    const currentTrack = tracks[0];
    // const nextTrack = tracks[1];

    // Get the current audio tag on the page (the current song playing)
    const audio = document.getElementById("audio");

    // Toggle global isPlaying state based on play or pause button press for icon change
    const isPlaying = clickedClass === buttonClass ? false : true;
    this.props.receiveIsPlaying(isPlaying);

    // Play and pause the audio when buttons are clicked 
    // Calling play or pause now returns a Promise
    if (isPlaying) {
      const playPromise = audio.play();
      if (playPromise !== undefined) {
        playPromise.then(() => 'Success!').catch(() => 'Error');
      }
    } else {
      const pausePromise = audio.pause();
      if (pausePromise !== undefined) {
        pausePromise.then(() => 'Success!').catch(() => 'Error'); 
      }
    }

    // Setting new current and next track
    this.props.receiveCurrentTrack(currentTrack); 
    // this.props.receiveNextTrack(nextTrack);
    this.props.receiveTitle(currentTrack.title);
    this.props.receiveArtist(currentTrack.artist);
    this.props.receiveAlbumId(currentTrack.album_id); 
  }

  render() {
    const { playlist, currentTrack, isPlaying } = this.props;

    // Getting active playlist
    const activePlaylist = JSON.parse(localStorage.getItem('active_playlist'));

    // Get playlist's user
    const users = Object.values(JSON.parse(localStorage.getItem('users')));
    const user = users[playlist.user_id - 1];

    // Determine class name for button based on play or pause 
    const buttonType = isPlaying && playlist.track_ids[0] === currentTrack.id && playlist.id === activePlaylist.id ? 'pause-button' : 'play-button';
    const buttonIcon = isPlaying && playlist.track_ids[0] === currentTrack.id && playlist.id === activePlaylist.id ? 'pause-icon' : 'play-icon';

    return (
        <li>
          <div className="playlist-thumbnail-wrapper" onClick={e => this.handleThumbnailClick(e)}> 
            <div className="thumbnail">
              <Link to={`/playlist/${playlist.id}`}>
                <img src={playlist.photo_url} alt="Playlist thumbnail" />
                <p>{playlist.title}</p>
                <p>By {user.username}</p> 
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