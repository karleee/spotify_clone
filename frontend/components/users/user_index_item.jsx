import React from 'react';
import { withRouter } from 'react-router-dom';
import { Link } from 'react-router-dom';

class UserIndexItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = { tracks: [] };
    this.handleClick = this.handleClick.bind(this);
    this.handleTrack = this.handleTrack.bind(this);
    this.play = this.play.bind(this);
  } 
  
  componentDidMount() {
    // Changing the currently stored viewing playlist
    // Changing the currrently stored playlist tracks
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
    if (!e.target.classList.contains("circle")) { 
      this.props.history.push(`/playlist/${this.props.playlist.id}`);    
    }
  }

  handleTrack() {
    const { playlist } = this.props;
    const { tracks } = this.state;

    let currentTrack = tracks[0]; 
    let nextTrack = tracks[1];
    this.props.receiveCurrentTrack(currentTrack);
    this.props.receiveNextTrack(nextTrack);
    this.props.receiveTitle(currentTrack.title);
    this.props.receiveArtist(currentTrack.artist);
    this.props.receiveAlbumId(currentTrack.album_id);
    this.props.receivePlaylistId(playlist.id);
  }

  play() {
    const { playlist } = this.props;
    this.handleTrack(playlist);
    this.props.receivePlaylistId(playlist.id);
  }

  render() {
    const { playlist } = this.props;

    return (
        <li>
          <div className="playlist-image" onClick={ this.handleClick }>
            <div className="play-button" onClick={ this.play }> 
              <div className="triangle right"></div> 
              <div className="circle"></div>
            </div>

            <div className="overlay"></div>
            <img src={playlist.photo_url} alt="Playlist thumbnail" onClick={ this.handleClick }/>
          </div>

          <div className="playlist-name">
            <Link to={`/playlist/${playlist.id}`}>{playlist.title}</Link> 
          </div>
        </li>
    );
  }
}

export default withRouter(UserIndexItem);  