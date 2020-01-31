import React from 'react';
import { Link } from 'react-router-dom';

const HeavyRotationIndexItem = ({ playlist }) => (
  <li>
    <div className="heavy-rotation-thumbnail-content">
      <Link to={`/playlist/${playlist.id}`}>{ playlist.title }</Link>
      <p>By Spotify</p>
    </div>
  </li>
);
 
export default HeavyRotationIndexItem;  