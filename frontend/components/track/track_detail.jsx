import React from 'react';
import TrackIndexItem from './track_index_item';

class TrackDetail extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(track) {
    // Get the current audio tag on the page (the current song playing)
    const audio = document.getElementById("audio");

    // Toggle global isPlaying state for icon change 
    const isPlaying = !this.props.isPlaying;
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

  // Renders the TrackDetail component
  render() {
    const { tracks, currentTrack, isPlaying } = this.props; 

    return (
      <ul>
        {tracks.map(track => <TrackIndexItem key={track.id} track={track} currentTrack={currentTrack} isPlaying={isPlaying} handleClick={this.handleClick} />)}  
      </ul>
    );
  }
}

export default TrackDetail;