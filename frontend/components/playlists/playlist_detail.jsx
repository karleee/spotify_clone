import React from 'react';
import { Link } from 'react-router-dom';
import TrackDetail from '../track/track_detail_container';

class PlaylistDetail extends React.Component { 
  constructor(props) {
    super(props);
    this.play = this.play.bind(this);
  }

  componentDidMount() {
    // Persisting values of playlist and tracks for page refresh
    // Local storage can only store string and values, no objects
    localStorage.setItem('viewing_playlist', JSON.stringify(this.props.playlist));
    localStorage.setItem('playlist_tracks', JSON.stringify(this.props.tracks)); 
  }

  play() {
    // Setting global state of isPlaying true for pause change
    const isPlaying = true;
    this.props.receiveIsPlaying(isPlaying);

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
    const { playlist, tracks, currentTrack } = this.props;

    return (
      <div className="playlist-detail-wrapper">
        <div className="header">
          <div className="image">
            <div className="play-button" onClick={this.play}>
              <div className="triangle right"></div>
              <div className="circle"></div>
            </div>

            <div className="overlay"></div>
            <img src={playlist.photo_url} alt="Playlist thumbnail" />  
          </div>

          <h1>{playlist.title}</h1> 

          <div className="user-wrapper">
            {playlist.playlist_type === 'album' ? <Link to={`/artists/${playlist.user_id}`}>{playlist.user}</Link> : <Link to={`/users/${playlist.user_id}`}>{playlist.user}</Link>} 
          </div>
          
          <p>{playlist.track_ids.length} songs</p>             
        </div>
 
        <div className="tracks">    
          <TrackDetail playlist={playlist} tracks={tracks} />   
        </div>
      </div>
    );
  }
}

export default PlaylistDetail;