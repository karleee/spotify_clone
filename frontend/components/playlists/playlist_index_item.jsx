import React from 'react';
import { Link } from 'react-router-dom';

const PlaylistIndexItem = ({ playlist }) => ( 
  <Link to={`/playlist/${playlist.id}`}>
    <li>
      <img src={playlist.photo_url} alt="Playlist thumbnail" />
      <p>{playlist.title}</p>
      <p>By Spotify</p>
    </li>
  </Link>
);
 
export default PlaylistIndexItem;  