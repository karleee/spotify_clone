import React, { Component } from 'react';

class ArtistDetailItem extends Component {
  // Constructor for the ArtistDetailItem component
  constructor(props) {
    super(props);
    this.state = { duration: "0:00" };
    this.getDuration();
  }

  // Gets the duration for each song
  getDuration() {
    const { track } = this.props;
    let duration;

    // Creates a new audio element with track's mp3 url
    const audio = new Audio();
    audio.src = [track.audio_url];

    // Gets the duration in seconds once the audio file is done loading 
    audio.onloadedmetadata = () => { 
      duration = this.formatTime(audio.duration);
      this.setState({ duration });
    };
  }

  // Formats track times in uniform format
  formatTime(seconds) {
    let min = Math.floor(seconds / 60);
    seconds = Math.floor(seconds % 60);
    seconds = seconds < 10 ? "0" + seconds : seconds;
    return min + ":" + seconds;
  }

  handleClick(e, track) {
    // Get the current audio tag on the page (the current song playing)
    const audio = document.getElementById("audio");

    // Toggle global isPlaying state based on play or pause button press for icon change
    const parent = e.target.parentElement.parentElement.parentElement;
    const isPlaying = parent.className === 'track-index-item active main-container' ? false : true;
    this.props.receiveIsPlaying(isPlaying);

    // Play and pause the audio when buttons are clicked 
    if (isPlaying) {
      audio.play();
    } else {
      audio.pause();
    }

    // Setting new current and next track
    let index = (this.props.tracks.indexOf(track) + 1) % this.props.tracks.length;
    let nextTrack = this.props.tracks[index];

    this.props.receiveCurrentTrack(track);
    this.props.receiveNextTrack(nextTrack);
    this.props.receiveTitle(track.title);
    this.props.receiveArtist(track.artist);
    this.props.receivePlaylistId(this.props.playlistId);
    this.props.receiveAlbumId(track.album_id);
  }

  // Renders the ArtistDetailItem component
  render() {
    const { track, albums, indx, isPlaying, currentTrack } = this.props;
    let { duration } = this.state;

    // Determine class name for button based on play or pause
    const buttonType = isPlaying && track.id === currentTrack.id ? 'pause-button' : 'play-button';
    const iconType = isPlaying && track.id === currentTrack.id ? 'pause-icon' : 'play-icon';

    // Getting track's album 
    const albumId = track.album_id; 
    const album = albums[albumId];

    return (
      <li>
        <div className="artist-detail name-container">
          <div className="artist-detail image-wrapper">
            <img src={`${album.photo_url}`} alt="Album cover"/> 
          </div>

          <div className="artist-detail button-wrapper">
            <p>{indx}</p>

            <div className={`artist-detail ${buttonType}-wrapper`} onClick={e => this.handleClick(e, track)}>
              <i className={`artist-detail ${iconType}-wrapper`}></i>
            </div>
          </div>

          <p className={currentTrack && track.title === currentTrack.title ? 'active' : ''}>{track.title}</p>  
        </div>

        <div className="artist-detail duration-container">
          <p>{duration}</p>
        </div>
      </li>
    );
  }
};
 
export default ArtistDetailItem;