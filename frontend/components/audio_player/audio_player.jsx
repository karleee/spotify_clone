import React from 'react';
import AudioDetail from './audio_detail_container';
import AudioVolume from './audio_volume_container';

class AudioPlayer extends React.Component {
  // Constructor for AudioPlayer component
  constructor(props) {
    super(props);

    this.state = {
      audio: "",
      nextTrack: "",
      tracks: [],
      shuffle: false,
      repeat: false,
      currentTime: 0,
      duration: "0:00"
    };
    // Binding functions for context of this
    this.previous = this.previous.bind(this);
    this.play = this.play.bind(this); 
    this.next = this.next.bind(this);
    this.handleShuffle = this.handleShuffle.bind(this);
    this.handleRepeat = this.handleRepeat.bind(this);
    this.handlePosition = this.handlePosition.bind(this);
    this.mouseMove = this.mouseMove.bind(this);
    this.mouseDown = this.mouseDown.bind(this);
    this.mouseUp = this.mouseUp.bind(this);
  }

  // Cleanup from mounting component
  componentWillUnmount() {
    this.audio.pause();
    this.setState({ audio: "", play: false });
  }

  // Component mounting 
  componentDidMount() {
    this.currentTimeInterval = null;
    this.setState({ currentTime: "0:00" });

    // Changes the volume based on the slider
    this.audio.onplay = () => {
      this.currentTimeInterval = setInterval(() => {
        this.audio.volume = this.props.volume
      }, 500);
    }

    this.audio.onpause = () => {
      clearInterval(this.currentTimeInterval);
    }

    this.audio.addEventListener("timeupdate", () => {
      if (this.audio && this.audio.currentTime >= this.audio.duration) this.next();
      if (this.audio.duration) this.setState({ duration: this.formatTime(this.audio.duration) });

      let currentTime = this.formatTime(this.audio.currentTime);
      this.setState({ currentTime });
      let ratio = this.audio.currentTime / this.audio.duration;
      let position = this.timeline.offsetWidth * ratio + this.timeline.offsetLeft;
      this.handlePosition(position);
    });
  }

  // Formats track times in uniform format
  formatTime(seconds) {
    let min = Math.floor(seconds / 60);
    seconds = Math.floor(seconds % 60);
    seconds = seconds < 10 ? "0" + seconds : seconds;
    return min + ":" + seconds;
  }

  // Component receiving new props
  componentWillReceiveProps(newProps) {
    if (newProps.audio && newProps.audio.track_url !== this.state.audio) {
      let audio = newProps.audio.track_url;
      this.setState({ paused: false, audio });
    }
  }

  // Gets the previous song in the playlist
  previous() {
    const { currentTrack, tracks } = this.props;
    let previousIndex;
    let currentIndex;

    // Get the index for the previous track
    tracks.forEach((track, indx) => { if (track.title === currentTrack.title) currentIndex = indx });

    if (this.state.repeat || (this.state.repeat && this.audio.currentTime >= this.audio.duration)) {
      this.audio.currentTime = 0;
      this.setState({ currentTrack });
      this.audio.play();
      return;
    } else if (this.state.shuffle) {
      previousIndex = Math.floor(Math.random() * tracks.length);
    } else {
      previousIndex = ((currentIndex - 1) + tracks.length) % tracks.length;
    }

    // The previous track becomes the current track
    // The next track becomes the current track
    let newTrack = tracks[previousIndex]
    let nextTrack = tracks[currentIndex];

    // Setting global state
    this.props.receiveCurrentTrack(newTrack);
    this.props.receiveNextTrack(nextTrack);
    this.props.receiveTitle(newTrack.title); 
    this.props.receiveArtist(newTrack.artist);
    this.props.receiveAlbumId(newTrack.album_id); 
    this.setState({ currentTrack: newTrack, nextTrack });
  } 

  // Switches play and pause buttons
  play(e) {
    // Determine button type
    const button = e.target.className === 'ap-play-icon' ? 'play' : 'pause';
    let isPlaying;

    // Setting global state of isPlaying to false or true based on pause or play
    if (button === 'play') {
      this.audio.play();
      isPlaying = true;
      this.props.receiveIsPlaying(isPlaying);
    } else {
      this.audio.pause();
      isPlaying = false;
      this.props.receiveIsPlaying(isPlaying);
    }
  }

  // Gets the next song in the playlist
  next() {
    const { currentTrack, tracks, receiveIsPlaying } = this.props;
    let currentIndex;
    let nextIndex;

    // Set isPlaying to true
    receiveIsPlaying(true);

    // Get the index for the current track
    tracks.forEach((track, indx) => { if (track.title === currentTrack.title) currentIndex = indx });
 
    if (this.state.repeat || (this.state.repeat && this.audio.currentTime >= this.audio.duration)) {
      this.audio.currentTime = 0; 
      this.setState({ currentTrack });
      this.audio.play();
      return;
    } else if (this.state.shuffle) {
      nextIndex = Math.floor(Math.random() * tracks.length);
    } else {
      nextIndex = (currentIndex + 1) % tracks.length; 
    }

    // The next track becomes the current track
    // The and the next track of the previous next track becomes the new next track
    let newTrack = tracks[nextIndex];
    let nextTrack = tracks[tracks.indexOf(newTrack) + 1 % tracks.length];

    // Setting global state with new current and next tracks
    this.props.receiveCurrentTrack(newTrack);
    this.props.receiveNextTrack(nextTrack);
    this.props.receiveTitle(newTrack.title);
    this.props.receiveArtist(newTrack.artist);
    this.props.receiveAlbumId(newTrack.album_id); 
    this.setState({ currentIndex: newTrack, nextTrack });
  }

  // Positions the progress bar and handle circle
  handlePosition(position) {
    if (!this.audio.duration) return;

    // let timelineWidth = this.timeline.offsetWidth - this.handle.offsetWidth;
    let handleLeft = position - this.timeline.offsetLeft;

    if (handleLeft >= 0 && handleLeft <= this.timeline.offsetWidth) {
      this.handle.style.width = handleLeft + "px";
      this.handleCircle.style.marginLeft = handleLeft + "px";
    }

    if (handleLeft < 0) {
      this.handle.style.width = "0px";
      this.handleCircle.style.marginLeft = "0px";
    }

    if (handleLeft > this.timeline.offsetWidth) {
      this.handleCircle.style.marginLeft = this.timeline.offsetWidth + "px";
      this.handle.style.width = this.timeline.offsetWidth + "px";
    }
  }

  // Plays a random track from the playlist
  handleShuffle(e) {
    e.preventDefault();
    if (!this.state.shuffle === true) {
      this.shuffleButton.classList.add("shuffle-selected");
    } else {
      this.shuffleButton.classList.remove("shuffle-selected");
    }
    this.setState({ shuffle: !this.state.shuffle });
  }

  // Plays a song on repeat
  handleRepeat(e) {
    e.preventDefault();
    if (!this.state.repeat === true) {
      this.repeatButton.classList.add("repeat-selected");
    } else {
      this.repeatButton.classList.remove("repeat-selected");
    }
    this.setState({ repeat: !this.state.repeat });
  }

  // Handles mouse movement
  mouseMove(e) {
    this.handlePosition(e.pageX);
    this.audio.currentTime = ((e.pageX - this.timeline.offsetLeft) / this.timeline.offsetWidth) * this.audio.duration;
  }

  // Handles mouse down
  mouseDown(e) {
    window.addEventListener('mousemove', this.mouseMove);
    window.addEventListener('mouseup', this.mouseUp);
  }

  // Handles mouse up
  mouseUp(e) {
    window.removeEventListener('mousemove', this.mouseMove);
    window.removeEventListener('mouseup', this.mouseUp);
  }

  // Renders the component
  render() {
    const { currentTrack, isPlaying } = this.props;

    return (
      <div className="audio-player-container">
        <AudioDetail track={currentTrack} />

        <div className="ap-main-controls">
          <div className="ap-main-control-buttons">
            <i className="ap-shuffle-icon" onClick={this.handleShuffle} ref={shuffleButton => { this.shuffleButton = shuffleButton }}></i>

            <i className="ap-previous-icon" onClick={this.previous}></i>

            <div className="ap-play-wrapper">
              <i className={!isPlaying ? "ap-play-icon" : "ap-pause-icon"} onClick={this.play}></i>
            </div>

            <i className="ap-next-icon" onClick={this.next}></i>

            <i className="ap-repeat-icon" onClick={this.handleRepeat} ref={repeatButton => { this.repeatButton = repeatButton }}></i>
            
            <audio id="audio" src={currentTrack ? currentTrack.audio_url : ""} ref={audio => { this.audio = audio }} autoPlay />
          </div>

          <div className="ap-timeline-controls">
            <p id="ap-duration-time">{this.state.currentTime}</p>

            <div id="ap-timeline" onClick={this.mouseMove} ref={(timeline) => { this.timeline = timeline }}>
              <div id="ap-progress-bar">
                <div id="ap-handle" onMouseDown={this.mouseDown} ref={(handle) => { this.handle = handle }} />
                <div id="ap-handle-circle" onMouseDown={this.mouseDown} ref={(handleCircle) => { this.handleCircle = handleCircle }} />
               </div>
            </div>

            <p id="ap-end-time">{this.state.duration}</p>
          </div>
        </div>

        <AudioVolume />
      </div>
    );
  }
}

export default AudioPlayer;