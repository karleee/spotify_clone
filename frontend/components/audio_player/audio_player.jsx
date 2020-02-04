import React from 'react';
import AudioDetail from './audio_detail_container';
import AudioVolume from './audio_volume_container';

class AudioPlayer extends React.Component { 
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

    this.previous = this.previous.bind(this);
    this.play = this.play.bind(this);
    this.next = this.next.bind(this);
    this.handleShuffle = this.handleShuffle.bind(this);
    this.handleRepeat = this.handleRepeat.bind(this);
    this.positionHandle = this.positionHandle.bind(this);
    this.mouseMove = this.mouseMove.bind(this);
    this.mouseDown = this.mouseDown.bind(this);
    this.mouseUp = this.mouseUp.bind(this);
  }

  // Play button only changes to a pause button if a new song is selected
  componentWillReceiveProps(newProps) {
    if (newProps.audio && newProps.audio.audio_url !== this.state.audio) {
      this.setState({ play: true });
    }
  }

  componentDidMount() {
    this.setState({ currentTime: "0:00" })
    this.audio.addEventListener("timeupdate", () => {
      if (this.audio && this.audio.currentTime === this.audio.duration) {
        this.next();
      }

      if (this.audio.duration) {
        this.setState({ duration: this.formatTime(this.audio.duration) })
      }

      let currentTime = this.formatTime(this.audio.currentTime);
      this.setState({ currentTime });
      let ratio = this.audio.currentTime / this.audio.duration;
      let position = (this.timeline.offsetWidth * ratio) + this.timeline.offsetLeft;
      this.positionHandle(position);
    });
  }

  // Puts duration time into a uniform format
  formatTime(seconds) {
    let min = Math.floor(seconds / 60);
    seconds = Math.floor(seconds % 60);
    seconds = seconds < 10 ? '0' + seconds : seconds;
    return min + ':' + seconds;
  }

  // Plays a track when it is clicked
  play() {
    if (this.state.play) {
      this.setState({ play: false });
      this.audio.pause();
    } else {
      this.setState({ play: true });
      this.audio.play();
    }
  }

  // Plays the next track in the playlist
  next() {
    const { audio, nextTrack, tracks } = this.props;
    let index;

    if (this.state.repeat && this.audio.currentTime >= this.audio.duration) {
      this.audio.currentTime = 0;
      this.setState({ play: true, audio });
      this.audio.play();
      return;
    } else if (this.state.repeat && this.audio.currentTime < this.audio.duration) {
      this.setState({ repeat: !this.state.repeat });
      this.repeatButton.classList.remove('rand-selected');
    }

    if (this.state.shuffle) {
      index = Math.floor(Math.random() * tracks.length);
    } else {
      index = (tracks.indexOf(nextTrack) + 1) % tracks.length;
    }

    let newCurrentTrack = tracks[index];
    this.props.receiveCurrentTrack(nextTrack);
    this.props.receiveNextTrack(newCurrentTrack);
  }

  // Plays the previous track in the playlist
  previous() {
    const { audio, tracks } = this.props;
    let newCurrentIndx = ((tracks.indexOf(audio) - 1) + tracks.length) % tracks.length;
    let newNextIndx = (newCurrentIndx + 1) % tracks.length;
    let newCurrentTrack = tracks[newCurrentIndx];
    let newNextTrack = tracks[newNextIndx];
    this.props.receiveCurrentTrack(newCurrentTrack);
    this.props.receiveNextTrack(newNextTrack);
  }

  // Plays a random track from the playlist
  handleShuffle(e) {
    e.preventDefault();
    if (!this.state.shuffle === true) {
      this.shuffleIcon.classList.add("shuffle-selected");
    } else {
      this.shuffleIcon.classList.remove("shuffle-selected");
    }
    this.setState({ shuffle: !this.state.shuffle });
  }

  // Plays a song on repeat
  handleRepeat(e) {
    e.preventDefault();
    if (!this.state.repeat === true) {
      this.repeatIcon.classList.add("repeat-selected");
    } else {
      this.repeatIcon.classList.remove("repeat-selected");
    }
    this.setState({ repeat: !this.state.repeat });
  }

  positionHandle(position) {
    let timelineWidth = this.timeline.offsetWidth - this.handle.offsetWidth;
    let handleLeft = position - this.timeline.offsetLeft;

    if (handleLeft >= 0 && handleLeft <= timelineWidth) {
        this.handle.style.marginLeft = handleLeft + "px"; 
    }

    if (handleLeft < 0) {
        this.handle.style.marginLeft = "0px";
    }

    if (handleLeft > timelineWidth) {
        this.handle.style.marginLeft = timelineWidth + "px";
    }
  }

  mouseMove(e) {
    this.positionHandle(e.pageX);
    this.audio.currentTime = ((e.pageX - this.timeline.offsetLeft) / this.timeline.offsetWidth) * this.audio.duration;
  }

  mouseDown(e) {
    window.addEventListener('mousemove', this.mouseMove);
    window.addEventListener('mouseup', this.mouseUp);
  }

  mouseUp(e) {
    window.removeEventListener('mousemove', this.mouseMove);
    window.removeEventListener('mouseup', this.mouseUp);
  };

  render() {
    const { audio } = this.props; 
    
    return (
      <div className="ap-container">
        {/* <AudioDetail track={audio} /> */}

        <div className="ap-main-controls">
          <div className="ap-controls">
            <div className="ap-shuffle">
              <i className="ap-shuffle-icon" onClick={this.handleShuffle} ref={shuffleIcon => { this.shuffleIcon = shuffleIcon }}></i>
            </div>

            <div className="ap-previous-icon" onClick={ this.previous } />
            <div className={!this.state.play ? "ap-play-icon" : "ap-pause-icon"} onClick={ this.play } />
            <div className="ap-next-icon" onClick={ this.next } />

            <div className="ap-repeat">
              <i className="ap-repeat-icon" onClick={this.handleRepeat} ref={repeatIcon => { this.repeatIcon = repeatIcon }}></i>
            </div>
            <audio src={ audio ? audio.audio_url : ""} ref={audio => { this.audio = audio } } autoPlay />
          </div>

          <div className="ap-soundbar">
            <p id="ap-duration-time">{this.state.currentTime}</p>

            <div id="ap-timeline" onClick={this.mouseMove} ref={(timeline) => { this.timeline = timeline }}>
              <div id="ap-handle" onMouseDown={this.mouseDown} ref={(handle) => { this.handle = handle }} />
            </div> 

            <p id="ap-end-time">{this.state.duration}</p>
          </div>
          {/* <AudioVolume /> */}
        </div>
      </div> 
    );  
  }
}
 
export default AudioPlayer;