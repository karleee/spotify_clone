import React from 'react';
import { Route } from 'react-router-dom';
import TrackDetail from '../track/track_detail_container';

class PlaylistDetail extends React.Component { 
  componentDidMount() {
    this.props.requestSinglePlaylist(this.props.match.params.playlistId)
  }

  render() {
    const { playlist } = this.props;

    if (!playlist) return null;

    return (
      <div className="playlist-detail-container">
        <div className="playlist-detail-header">
          <img src={playlist.photo_url} alt="Playlist thumbnail" /> 
          <h1>{ playlist.title }</h1>
          <p>{playlist.user}</p>
          <p>{playlist.track_ids.length} songs</p>         
        </div>

        <div className="playlist-detail-tracks">  
          <TrackDetail playlistId={ playlist.id } />
        </div>
      </div>
    );
  }
}

export default PlaylistDetail;