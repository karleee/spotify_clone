import React from 'react';
import TrackIndexItem from './track_index_item';

const TrackDetail = ({ tracks }) => (
  <ul>
    { tracks.map(track => <TrackIndexItem key={ track.id } track={track} />) } 
  </ul>
);

export default TrackDetail;