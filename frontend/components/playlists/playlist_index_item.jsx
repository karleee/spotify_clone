import React from 'react';
import { Link } from 'react-router-dom';

class PlaylistIndexItem extends React.Component {
  constructor(props) {
    super(props);
  }

  handleClick() {
    
  }

  render() {
    const { playlist } = this.props;

    return (
      <Link to={`/playlist/${playlist.id}`}>
        <li>
          <div className="playlist-thumbnail-wrapper">
            <img src={playlist.photo_url} alt="Playlist thumbnail" />
            <p>{playlist.title}</p>
            <p>By {playlist.user}</p> 
            <div className="play-button">
              <div className="triangle right"></div> 
              <div className="circle"></div>
            </div>
          </div>
        </li>
      </Link>
    );
  }
}
 
export default PlaylistIndexItem;  