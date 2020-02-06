import React from 'react';
import { Link } from 'react-router-dom';
import { Route } from 'react-router-dom';
import TrackDetail from '../track/track_detail_container';

class PlaylistDetail extends React.Component { 
  constructor(props) {
    super(props);
    this.play = this.play.bind(this);
  }

  play() {
    if (!this.props.tracks) return;
    const { playlist, tracks } = this.props;
    let currentTrack = tracks[0];
    let nextTrack = tracks[1];
    this.props.receiveCurrentTrack(currentTrack);
    this.props.receiveNextTrack(nextTrack);
    this.props.receiveTitle(currentTrack.title);
    this.props.receiveArtist(currentTrack.artist);
    this.props.receiveAlbumId(currentTrack.album_id);
    this.props.receivePlaylistId(playlist.id);
  }

  render() {
    const { playlist, tracks } = this.props;

    if (!playlist) return null;

    return (
      <div className="playlist-detail-wrapper">
        <div className="header">
          <div className="playlist-image">
            <div className="play-button" onClick={this.play}>
              <div className="triangle right"></div>
              <div className="circle"></div>
            </div>

            <div className="overlay"></div>
            <img src={playlist.photo_url} alt="Playlist thumbnail" />  
          </div>

          <h1>{ playlist.title }</h1>

          <div className="playlist-detail-user-wrapper">
            { playlist.playlist_type === 'album' ? <Link to={`/artists/${playlist.user_id}`}>{playlist.user}</Link> : <Link to={`/users/${playlist.user_id}`}>{playlist.user}</Link> } 
          </div>
          
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