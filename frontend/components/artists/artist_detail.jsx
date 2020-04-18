import React, { Component } from 'react';

import ArtistDetailItem from './artist_detail_item';

class ArtistDetail extends Component {
  // Constructor for ArtistDetail component 
  constructor(props) {
    super(props);
    this.state = { playState: false }
  }

  componentDidMount() {
    // Persisting values of artist tracks
    // Local storage can only store string and values, no objects
    localStorage.setItem('playlist_tracks', JSON.stringify(this.props.tracks));
  }

  handleClick(e) {
    const { tracks } = this.props;

    // Toggle local playState
    this.setState({ playState: !this.state.playState });

    // Get the current and next track
    const currentTrack = tracks[0];
    const nextTrack = tracks[1];

    // Get the current audio tag on the page (the current song playing)
    const audio = document.getElementById("audio");

    // Toggle global isPlaying state based on play or pause button press for icon change
    const isPlaying = e.target.className === 'artist-detail pause-button-wrapper' ? false : true;
    this.props.receiveIsPlaying(isPlaying);

    // Play and pause the audio when buttons are clicked 
    if (isPlaying) {
      audio.play();
    } else {
      audio.pause();
    }

    // Setting new current and next track
    this.props.receiveCurrentTrack(currentTrack);
    this.props.receiveNextTrack(nextTrack);
    this.props.receiveTitle(currentTrack.title);
    this.props.receiveArtist(currentTrack.artist);
    this.props.receiveAlbumId(currentTrack.album_id);
  }

  // Renders ArtistDetail component
  render() {
    const { 
      artist, 
      albums, 
      tracks,
      receiveCurrentTrack,
      receiveNextTrack,
      receiveTitle,
      receiveArtist,
      receiveAlbumId,
      receivePlaylistId,
      receiveIsPlaying,
      isPlaying,
      currentTrack
    } = this.props;

    // Determine class name for button based on play or pause
    const buttonType = this.state.playState && isPlaying ? 'pause-button' : 'play-button';

    return (
      <div className="artist-detail body-container">
        <div className="artist-detail banner-container">
          <img src={artist.banner_url} alt="Artist banner" /> 
          <div className="artist-detail banner-overlay-container"></div>
          <div className="artist-detail header-container">
            <p>Artist</p>
            <h1>{artist.name}</h1>

            <button className={`artist-detail ${buttonType}-wrapper`} onClick={e => this.handleClick(e)}>
              {buttonType === 'play-button' ? 'Play' : 'Pause'}
            </button>
          </div>
        </div>  

        <div className="artist-detail songs-container"> 
          <h2>Popular</h2>

          <ul>
            {tracks.map((track, indx) =>
              <ArtistDetailItem 
                key={track.id} 
                albums={albums} 
                track={track} 
                tracks={tracks} 
                indx={indx + 1} 
                receiveCurrentTrack={receiveCurrentTrack}
                receiveNextTrack={receiveNextTrack}
                receiveTitle={receiveTitle}
                receiveArtist={receiveArtist}
                receiveAlbumId={receiveAlbumId}
                receivePlaylistId={receivePlaylistId}
                receiveIsPlaying={receiveIsPlaying}
                isPlaying={isPlaying}
                currentTrack={currentTrack} 
              />
            )}
          </ul>
        </div>
      </div>
    );
  }
}

export default ArtistDetail;