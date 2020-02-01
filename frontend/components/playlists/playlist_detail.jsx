import React from 'react';
import TrackIndex from '../track/track_index_container';

class PlaylistDetail extends React.Component { 
  componentDidMount() {
    this.props.requestSinglePlaylist(this.props.match.params.playlistId);
  }

  render() {
    const { playlist } = this.props;

    if (!playlist) return null;

    return (
      <div className="playlist-detail-container">
        <div className="playlist-detail-header">
          <p>Playlist</p>
          <h1>{ playlist.title }</h1>
          <p>
            Created by <span>{playlist.user}</span> • { playlist.trackIds.length } songs
          </p>
        </div>

        <div className="playlist-detail-tracks">
          <TrackIndex playlist={ playlist }/> 
        </div>
      </div>
    );
  }
}

export default PlaylistDetail;