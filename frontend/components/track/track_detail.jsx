import React from 'react';
import TrackIndexItem from './track_index_item';

const TrackDetail = ({playlist, tracks, currentTrack, isPlaying, handleClick}) => (
  <ul>
    {tracks.map(track => <TrackIndexItem key={track.id} playlist={playlist} track={track} currentTrack={currentTrack} isPlaying={isPlaying} handleClick={handleClick} />)}
  </ul>
);

export default TrackDetail;