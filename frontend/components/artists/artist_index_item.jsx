import React from 'react';

const ArtistIndexItem = ({ artist }) => (
  <li>
    <img src={ artist.photo_url } alt="Artist profile image" />
    <p>{ artist.name }</p> 
    
    <div className="label">
      <p>Artist</p>
    </div>
  </li>  
);

export default ArtistIndexItem;