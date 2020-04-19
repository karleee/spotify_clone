import React from 'react';
import TrackIndexItem from './track_index_item';

class TrackDetail extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e, track) {
    const { playlist } = this.props;

    // Get the current audio tag on the page (the current song playing) 
    const audio = document.getElementById("audio");

    // Setting the active playlist in localStorage
    localStorage.setItem('active_playlist', JSON.stringify(playlist));

    // Getting active playlist
    const activePlaylist = JSON.parse(localStorage.getItem('active_playlist'));

    // Toggle global isPlaying state based on play or pause button press for icon change
    const parent = e.target.parentElement.parentElement.parentElement;
    const isPlaying = parent.className === 'track-index-item active main-container' ? false : true;
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

    this.props.receiveCurrentTrack(track);
    this.props.receiveTitle(track.title); 
    this.props.receiveArtist(track.artist);
    this.props.receiveAlbumId(track.album_id);  
  }

  // Renders the TrackDetail component
  render() {
    const { playlist, tracks, currentTrack, isPlaying } = this.props; 

    return (
      <ul>
        {tracks.map(track => <TrackIndexItem key={track.id} playlist={playlist} track={track} currentTrack={currentTrack} isPlaying={isPlaying} handleClick={this.handleClick} />)}  
      </ul>
    );
  }
}

export default TrackDetail;