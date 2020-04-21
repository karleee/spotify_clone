import React from 'react';
import { Link } from 'react-router-dom';

class PlaylistIndexItem extends React.Component { 
  constructor(props) {
    super(props);
    this.state = {user: '', userType: ''};
  } 

  componentDidMount() {
    // Leave time in between data fetching and state setting to avoid
    // undefined values for users
    setTimeout(() => {
      this.getPlaylistUser();  
    }, 700);
  }

  // Get the playlist's user or artist
  getPlaylistUser() {
    const {playlist, users, artists} = this.props;
    const usersArr = Object.values(users);
    const artistsArr = Object.values(artists);
    let user;
    let userType;

    if (playlist.user_id) {
      const matchedUser = usersArr[playlist.user_id - 1];
      user = matchedUser ? matchedUser.username : '';
      userType = 'user';
    } else if (playlist.artist_id) {
      const matchedArtist = artistsArr[playlist.artist_id - 1];
      user = matchedArtist ? matchedArtist.name : '';
      userType = 'artist';
    } else {
      user = '';
      userType = '';
    }

    this.setState({user});
    this.setState({userType});
  }

  handleThumbnailClick(e) {
    if (e.target.className === 'playlist play-icon-wrapper') this.props.history.push(`/home`);
  }

  handleAudio(e) {
    const { playlist, tracks } = this.props;
    const clickedClass = e.target.className;
    const buttonClass = 'playlist pause-icon-wrapper';

    // Setting the playlist tracks and active playlist in localStorage
    localStorage.setItem('playlist_tracks', JSON.stringify(tracks));
    localStorage.setItem('active_playlist', JSON.stringify(playlist));

    // Call play function with event, all tracks, and targeted button class name
    this.play(tracks, clickedClass, buttonClass);
  }

  play(tracks, clickedClass, buttonClass) {
    // Get the current and next track
    const currentTrack = tracks[0];

    // Get the current audio tag on the page (the current song playing)
    const audio = document.getElementById("audio");

    // Toggle global isPlaying state based on play or pause button press for icon change
    const isPlaying = clickedClass === buttonClass ? false : true;
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

    // Setting new current track
    this.props.receiveCurrentTrack(currentTrack); 
    this.props.receiveTitle(currentTrack.title);
    this.props.receiveArtist(currentTrack.artist);
    this.props.receiveAlbumId(currentTrack.album_id); 
  }

  render() {
    const {playlist, currentTrack, isPlaying} = this.props;
    const {user, userType} = this.state; 

    // Get correct redirect link
    const link = userType === 'user' ? `/playlist/${playlist.user_id}` : `/artist/${playlist.artist_id}`;

    // Getting active playlist
    const activePlaylist = JSON.parse(localStorage.getItem('active_playlist'));

    // Determine class name for button based on play or pause 
    const buttonType = isPlaying && playlist.track_ids[0] === currentTrack.id && playlist.id === activePlaylist.id ? 'pause-button' : 'play-button';
    const buttonIcon = isPlaying && playlist.track_ids[0] === currentTrack.id && playlist.id === activePlaylist.id ? 'pause-icon' : 'play-icon';

    return (
        <li>
          <div className="playlist-thumbnail-wrapper" onClick={e => this.handleThumbnailClick(e)}> 
            <div className="thumbnail">
              <Link to={link}>
                <img src={playlist.photo_url} alt="Playlist thumbnail" />
                <p>{playlist.title}</p>
                {userType === 'user' ? <p>{`By ${user}`}</p> : <p>{user}</p>}
              </Link>
            </div>

            <div className={`playlist-item ${buttonType} control-container`}>
              <div className="playlist-item circle-icon-wrapper">
                <div className={`playlist ${buttonIcon}-wrapper`} onClick={e => this.handleAudio(e)}></div>  
              </div>
            </div>
          </div>
        </li>
    );
  }
}
 
export default PlaylistIndexItem;  

// const PlaylistIndexItem = ({users, artists}) => (
//   <p>{JSON.stringify(users)}</p>
// );

// export default PlaylistIndexItem;  