import React, { Component } from 'react';

import ArtistDetailItem from './artist_detail_item';

class ArtistDetail extends Component {
  // Constructor for ArtistDetail component 
  constructor(props) {
    super(props);

    // Explicity resetting play state to false if the page is manually reloaded
    // Otherwise don't touch it/keep the play state across the site
    window.performance.navigation.type === 1 ? localStorage.setItem('artist_playing', false) : '';
  }

  componentDidMount() {
    // Persisting values of artist tracks, artist, and play state
    // Local storage can only store string and values, no objects
    localStorage.setItem('playlist_tracks', JSON.stringify(this.props.tracks));
    localStorage.setItem('artist_page', JSON.stringify(this.props.artist));
  }

  handleAudio(e) {
    const { playlist, tracks } = this.props;
    const clickedClass = e.target.className;
    const buttonClass = 'artist-detail pause-button-wrapper';
    let playState;
  
    // Setting playState in localStorage
    if (clickedClass === buttonClass) {
      playState = false;
    } else {
      playState = true;
    }

    // Setting other localStorage variables
    localStorage.setItem('artist_playing', JSON.stringify(playState));
    localStorage.setItem('active_playlist', JSON.stringify(playlist));
    localStorage.setItem('playlist_tracks', JSON.stringify(tracks));

    // Call play function with event, all tracks, and targeted button class name
    this.play(tracks, clickedClass, buttonClass);
  }

  play(tracks, clickedClass, buttonClass) {
    // Get the current track
    const currentTrack = tracks[0];

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

    // Setting current track
    this.props.receiveCurrentTrack(currentTrack);
    this.props.receiveTitle(currentTrack.title);
    this.props.receiveArtist(currentTrack.artist);
    this.props.receiveAlbumId(currentTrack.album_id);
  }

  // Renders ArtistDetail component
  render() {
    const { 
      playlist,
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

    // Get playState from localStorage
    const playState = JSON.parse(localStorage.getItem('artist_playing'));

    // Determine class name for button based on play or pause
    const buttonType = playState ? 'pause-button' : 'play-button';

    return (
      <div className="artist-detail body-container">
        <div className="artist-detail banner-container">
          <img src={artist.banner_url} alt="Artist banner" /> 
          <div className="artist-detail banner-overlay-container"></div>
          <div className="artist-detail header-container">
            <p>Artist</p>
            <h1>{artist.name}</h1>

            <button className={`artist-detail ${buttonType}-wrapper`} onClick={e => this.handleAudio(e)}>
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
                playlist={playlist}
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
                playState={playState}
              />
            )}
          </ul>
        </div>
      </div>
    );
  }
}

export default ArtistDetail;