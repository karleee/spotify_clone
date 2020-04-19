import React from 'react';
import { withRouter } from 'react-router-dom';
import { Link } from 'react-router-dom';

class UserIndexItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = { tracks: [] };
  } 
  
  componentDidMount() {
    // Changing the currently stored viewing playlist and tracks
    localStorage.setItem('viewing_playlist', JSON.stringify(this.props.playlist));
    const currentPlaylist = JSON.parse(localStorage.getItem('viewing_playlist'));
    const allTracks = JSON.parse(localStorage.getItem('tracks')); 

    let foundTracks = [];
    currentPlaylist.track_ids.forEach(num => foundTracks.push(allTracks[num]));
    localStorage.setItem('playlist_tracks', JSON.stringify(foundTracks));
    const tracks = JSON.parse(localStorage.getItem('playlist_tracks'));

    this.setState({ tracks });
  }

  handleClick(e) {
    if (e.target.className !== 'user-index play-icon-wrapper' && e.target.className !== 'user-index pause-icon-wrapper') {
      // Set active playlist in localStorage
      localStorage.setItem('active_playlist', JSON.stringify(this.props.playlist));

      this.props.history.push(`/playlist/${this.props.playlist.id}`);    
    }
  }

  play(e) {
    // Get the current audio tag on the page (the current song playing)
    const { playlist } = this.props;
    const { tracks } = this.state;
    const audio = document.getElementById("audio");

    // Toggle global isPlaying state based on play or pause button press for icon change
    const parent = e.target.parentElement;
    const isPlaying = parent.parentElement.className === 'user-index pause-button control-container' ? false : true;
    this.props.receiveIsPlaying(isPlaying);

    // Play and pause the audio when buttons are clicked 
    // Calling play or pause now returns a Promise
    if (isPlaying) {
      const playPromise = audio.play();
      if (playPromise !== undefined) {
        playPromise.then(() => 'Success!').catch(() => 'Error');
      }
    } else {
      const pausePromise = audio.pause();
      if (pausePromise !== undefined) {
        pausePromise.then(() => 'Success!').catch(() => 'Error');
      }
    }

    this.props.receivePlaylistId(playlist.id);

    let currentTrack = tracks[0];
    this.props.receiveCurrentTrack(currentTrack);
    this.props.receiveTitle(currentTrack.title);
    this.props.receiveArtist(currentTrack.artist);
    this.props.receiveAlbumId(currentTrack.album_id);
  }

  render() {
    const { playlist, currentTrack, isPlaying } = this.props;

    // Get active playlist from localStorage
    const activePlaylist = JSON.parse(localStorage.getItem('active_playlist'));

    // Determine class name for button based on play or pause
    const buttonType = isPlaying && playlist.track_ids[0] === currentTrack.id && playlist.id === activePlaylist.id ? 'pause-button' : 'play-button';
    const buttonIcon = isPlaying && playlist.track_ids[0] === currentTrack.id && playlist.id === activePlaylist.id ? 'pause-icon' : 'play-icon';

    return (
        <li>
          <div className="user-index image-container" onClick={e => this.handleClick(e)}>
            <img src={playlist.photo_url} alt="Playlist thumbnail" onClick={e => this.handleClick(e)}/>
            <div className={`user-index ${buttonType} overlay-container`}></div>

            <div className={`user-index ${buttonType} control-container`} onClick={e => this.play(e)}> 
              <div className="user-index circle-icon-wrapper">
                <i className={`user-index ${buttonIcon}-wrapper`}></i>
              </div> 
            </div>

          </div>

          <div className="playlist-name">
            <Link to={`/playlist/${playlist.id}`}>{playlist.title}</Link> 
          </div>
        </li>
    );
  }
}

export default withRouter(UserIndexItem);  