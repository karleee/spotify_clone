import React from 'react';
import { Link } from 'react-router-dom';

const PlaylistIndexItem = ({ playlist }) => ( 
  <li>
    <div className="playlist-thumbnails">
      <Link to={`/playlist/${playlist.id}`}>{ playlist.title }</Link>
      <p>By Spotify</p>
    </div>
  </li>
);
 
export default PlaylistIndexItem;  