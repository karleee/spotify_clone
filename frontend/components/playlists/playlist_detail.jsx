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
    const currentTrack = tracks[0];
    const nextTrack = tracks[1];

    this.props.receiveCurrentTrack(currentTrack);
    this.props.receiveNextTrack(nextTrack);
    this.props.receiveTitle(currentTrack.title);
    this.props.receiveArtist(currentTrack.artist);
    this.props.receivePlaylistId(playlist.id); 
    this.props.receiveAlbumId(currentTrack.album_id);
  }

  render() {
    const { playlist, tracks, isPlaying } = this.props;

    // Determine class name for button based on play or pause
    const buttonType = isPlaying? 'pause-button' : 'play-button';
    const buttonIcon = isPlaying ? 'pause-icon' : 'play-icon';


    return (
      <div className="playlist-detail-wrapper">  
        <div className="playlist album-cover-container">
          <div className="playlist image-container">
            <img src={playlist.photo_url} alt="Playlist thumbnail" /> 
            <div className={`playlist ${buttonType} overlay-container`}></div> 

            <div className={`playlist ${buttonType} control-container`} onClick={this.play}>
              <div className="playlist circle-icon-wrapper">
                <i className={`playlist ${buttonIcon}-wrapper`}></i>
              </div>
            </div>
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