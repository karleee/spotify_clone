import React from 'react';
import { Route } from 'react-router-dom';
import TrackDetail from '../track/track_detail_container';

class PlaylistDetail extends React.Component { 
  constructor(props) {
    super(props);
    // this.handlePlay = this.handlePlay.bind(this);
  }

  componentDidMount() {
    // this.props.requestSinglePlaylist(this.props.match.params.playlistId);
    // this.props.requestAllTracks();
  }

  // handlePlay() {
  //   return () => this.props.receivePlaylistId(this.props.match.params.playlistId);
  // }

  render() {
    const { playlist, tracks } = this.props;

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
          <TrackDetail playlist={playlist} tracks={tracks} />  
        </div>
      </div>
    );
  }
}

export default PlaylistDetail;