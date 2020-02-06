import React from 'react';

const TrackIndexItem = ({ track, handleClick }) => ( 
  <li>
    <div className="track-info">
      <div className="track-note">
        <i className="music-note-icon" onClick={() => handleClick(track)}></i>
      </div>

      <div className="track-text">
        <p>{track.title}</p> 
        <p>{track.artist} • {track.album}</p> 
      </div>
    </div> 
  </li>
);

export default TrackIndexItem;