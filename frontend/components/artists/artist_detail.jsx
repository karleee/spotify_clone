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
    localStorage.setItem('artist_tracks', JSON.stringify(this.props.tracks));
  }

  // Renders ArtistDetail component
  render() {
    const { artist, tracks } = this.props;

    // console.log('First track: ' + JSON.stringify(tracks[0].title));

    return (
      <div className="artist body-container">
        <div className="artist banner-container"></div> 

        <div className="artist header-container">
          <p>Artist</p>
          <h1>{artist.name}</h1>

          <div className="artist button-container">
            <button>Play</button>
          </div>
        </div>

        <div className="artist songs-container"> 
          <h2>Popular</h2>

          <ul>
            {tracks.map((track, indx) =>
              <ArtistDetailItem key={track.id} track={track} indx={indx + 1} />
            )}
          </ul>
        </div>
      </div>
    );
  }
}

export default ArtistDetail;