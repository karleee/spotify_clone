import React from 'react';

const TrackIndexItem = ({ track, currentTrack, handleClick }) => ( 
  <li>
    <div className="track-info">
      <div className="track-note">
        <i className="music-note-icon" onClick={() => handleClick(track)}></i>
      </div>

      <div className={currentTrack && currentTrack.title === track.title ? 'track-text playlist active' : 'track-text playlist'}>
        <p>{track.title}</p> 
        <p>{track.artist} • {track.album}</p>  
      </div>
    </div> 
  </li>
);

export default TrackIndexItem;