import React from 'react';

const TrackIndexItem = ({ track }) => ( 
  <li>
    <div className="track-info">
      <i className="music-note-icon"></i>
      <div className="track-text">
        <p>{track.title}</p>
        <p>{track.artist} • {track.album}</p>
      </div>
    </div>
  </li>
);

export default TrackIndexItem;