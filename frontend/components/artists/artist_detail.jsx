import React, { Component } from 'react';

import ArtistDetailItem from './artist_detail_item';

class ArtistDetail extends Component {
  // Constructor for ArtistDetail component 
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    // Persisting values of artist tracks
    // Local storage can only store string and values, no objects
    localStorage.setItem('playlist_tracks', JSON.stringify(this.props.tracks));
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

    return (
      <div className="artist-detail body-container">
        <div className="artist-detail banner-container">
          <img src={artist.banner_url} alt="Artist banner" /> 
          <div className="artist-detail banner-overlay-container"></div>
          <div className="artist-detail header-container">
            <p>Artist</p>
            <h1>{artist.name}</h1>
            <button>Play</button>
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