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

  // Renders the ArtistDetailItem component
  render() {
    const { track, indx } = this.props;
    let { duration } = this.state;

    return (
      <li>
        <div className="artist-detail image-wrapper"></div>
        <p>{indx}</p>
        <p>{track.title}</p>  
        <p>{duration}</p>
      </li>
    );
  }
};
 
export default ArtistDetailItem;