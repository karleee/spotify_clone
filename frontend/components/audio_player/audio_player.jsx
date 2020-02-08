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
      play: false,
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

  // Component mounting 
  componentDidMount() {
    this.currentTimeInterval = null;
    this.setState({ currentTime: "0:00" });

    // Changes the volume based on the slider
    this.audio.onplay = () => {
      this.currentTimeInterval = setInterval(() => {
        this.audio.volume = this.props.volume
      }, 500);

    };

    this.audio.onpause = () => {
      clearInterval(this.currentTimeInterval);
    };

    this.audio.addEventListener("timeupdate", () => {
      if (this.audio && this.audio.currentTime >= this.audio.duration) {
        this.next();
      }

      if (this.audio.duration) {
        this.setState({ duration: this.formatTime(this.audio.duration) })
      }

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
      this.setState({ play: true, audio });
    }
  }

  // Gets the previous song in the playlist
  previous() {
    const { audio, tracks } = this.props;
    let newCurrentIndx = ((tracks.indexOf(audio) - 1) + tracks.length) % tracks.length;
    let newNextIndx = (newCurrentIndx + 1) % tracks.length;
    let newCurrentTrack = tracks[newCurrentIndx];
    let newNextTrack = tracks[newNextIndx];
    this.props.receiveCurrentTrack(newCurrentTrack);
    this.props.receiveNextTrack(newNextTrack);
    this.props.receiveTitle(newCurrentTrack.title); 
    this.props.receiveArtist(newCurrentTrack.artist);
    this.props.receiveAlbumId(newCurrentTrack.album_id); 
    this.setState({ play: true, audio: newCurrentTrack, nextTrack: newNextTrack });
  }

  // Switches play and pause buttons
  play() {
    if (this.state.play) {
      this.audio.pause();
      this.setState({ play: false });
    } else {
      this.audio.play();
      this.setState({ play: true });
    }
  }

  // Gets the next song in the playlist
  next() {
    const { audio, nextTrack, tracks } = this.props;
    let index;

    if (this.state.repeat && this.audio.currentTime >= this.audio.duration) {
      this.audio.currentTime = 0;
      this.setState({ play: true, audio });
      this.audio.play();
      return;
    } else if (this.state.shuffle) {
      index = Math.floor(Math.random() * tracks.length);
    } else {
      index = (tracks.indexOf(nextTrack) + 1) % tracks.length; 
    }

    let newNextTrack = tracks[index];
    this.props.receiveCurrentTrack(nextTrack);
    this.props.receiveNextTrack(newNextTrack);
    this.props.receiveTitle(nextTrack.title);
    this.props.receiveArtist(nextTrack.artist);
    this.props.receiveAlbumId(nextTrack.album_id); 
    this.setState({ play: true, audio: nextTrack, nextTrack: newNextTrack });
  }

  // Positions the progress bar and handle circle
  handlePosition(position) {
    if (!this.audio.duration) return;

    let timelineWidth = this.timeline.offsetWidth - this.handle.offsetWidth;
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
    const { audio } = this.props;

    return (
      <div className="audio-player-container">
        <AudioDetail track={audio} />

        <div className="ap-main-controls">
          <div className="ap-main-control-buttons">
            <i className="ap-shuffle-icon" onClick={this.handleShuffle} ref={shuffleButton => { this.shuffleButton = shuffleButton }}></i>

            <i className="ap-previous-icon" onClick={this.previous}></i>

            <div className="ap-play-wrapper">
              <i className={!this.state.play ? "ap-play-icon" : "ap-pause-icon"} onClick={this.play}></i>
            </div>

            <i className="ap-next-icon" onClick={this.next}></i>

            <i className="ap-repeat-icon" onClick={this.handleRepeat} ref={repeatButton => { this.repeatButton = repeatButton }}></i>
            
            <audio src={audio ? audio.audio_url : ""} ref={audio => { this.audio = audio }} autoPlay />
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