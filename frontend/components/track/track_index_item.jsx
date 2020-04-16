import React from 'react';
import { Link } from 'react-router-dom';

const TrackIndexItem = ({ track, currentTrack, isPlaying, handleClick }) => {
  const isActive = currentTrack && currentTrack.title === track.title ? 'active' : '';
  let audioState;

  if (currentTrack) {
    if (currentTrack.title === track.title && isPlaying) {
      audioState = 'active';
    }  else if (currentTrack.title === track.title && !isPlaying) {
      audioState = 'paused';
    } else {
      audioState = '';
    }
  }

  return ( 
    <li>
      <div className={`track-info ${audioState}`}>
        <div className="track-note">
          <i className="music-note-icon" onClick={e => handleClick(e, track)}></i> 
        </div>

        <div className={`track-text playlist ${isActive}`}>
          <p>{track.title}</p> 
          <p><Link to={`/artist/${track.artist_id}`}>{track.artist}</Link> • {track.album}</p>  
        </div>
      </div> 
    </li>
  );
};

export default TrackIndexItem;