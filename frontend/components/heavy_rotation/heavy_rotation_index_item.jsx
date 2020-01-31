import React from 'react';
import { Link } from 'react-router-dom';

const HeavyRotationIndexItem = ({ playlist }) => (
  <li>
    <Link to={`/playlist/${playlist.id}`}>{ playlist.title }</Link>
    <p>By Spotify</p>
  </li>
);
 
export default HeavyRotationIndexItem;  