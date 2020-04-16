import React, { Component } from 'react';
import { Link } from 'react-router-dom';

// const TrackIndexItem = ({ track, currentTrack, isPlaying, handleClick }) => {
class TrackIndexItem extends Component {
  constructor(props) {
    super(props);
    this.state = { duration: '0:00' };
    this.getDuration();
  }

  // Gets the duration for each song
  getDuration() {
    const { track } = this.props;
    let duration;

    // // Creates a new audio element with track's mp3 url
    const audio = new Audio();
    audio.src = [track.audio_url];
    // const audio = document.getElementById("audio");

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
    seconds = seconds < 10 ? '0' + seconds : seconds;
    return min + ':' + seconds;
  }

  // Renders TrackIndexItem component
  render() {
    const { track, currentTrack, isPlaying, handleClick } = this.props;

    const isActive = currentTrack && currentTrack.title === track.title ? 'active' : '';
    let audioState;

    if (currentTrack) {
      // console.log(currentTrack.title === track.title);
      // console.log(isPlaying);
      if (currentTrack.title === track.title && isPlaying) {
        audioState = 'active';
      }  else if (currentTrack.title === track.title && !isPlaying) {
        audioState = 'paused';
      } else {
        audioState = '';
      }  

      // console.log(audioState);
    }

    return ( 
      <li>
        <div className={`track-index-item ${audioState} main-container`}>
          <div className='track-index-item text-container'>
            <div className="track-index-item note-icon-wrapper">
              <i className="track-index-item note-icon" onClick={e => handleClick(e, track)}></i> 
            </div>

            <div className={`track-index-item title-artist-wrapper ${isActive}`}>
              <p>{track.title}</p> 
              <p><Link to={`/artist/${track.artist_id}`}>{track.artist}</Link> • {track.album}</p>  
            </div>
          </div>

          <div className='track-index-item duration-container'>
            <p>{this.state.duration}</p>
          </div>
        </div> 
      </li>
    );
  }
};

export default TrackIndexItem;