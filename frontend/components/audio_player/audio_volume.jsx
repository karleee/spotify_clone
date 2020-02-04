import React from 'react';
class AudioSound extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      volume: 1,
      mute: false
    };

    this.mouseMove = this.mouseMove.bind(this);
    this.mouseDown = this.mouseDown.bind(this);
    this.mouseUp = this.mouseUp.bind(this);
    this.mute = this.mute.bind(this);
    this.handlePosition = this.handlePosition.bind(this);
  }

  componentDidMount() {
    const { volume } = this.props;

    this.setState({ volume });
    // this.handle.style.width = this.timeline.offsetWidth + "px";
    // this.handleCircle.style.marginLeft = this.timeline.offsetWidth + "px";
  }

  handlePosition(position) {
    let timelineWidth = this.timeline.offsetWidth - this.handle.offsetWidth;
    let handleLeft = position - this.timeline.offsetLeft;

    if (handleLeft > this.timeline.offsetWidth || this.state.volume === 1) {
        this.handleCircle.style.marginLeft = this.timeline.offsetWidth + "px";
        this.handle.style.width = this.timeline.offsetWidth + "px";
    }

    if (handleLeft >= 0 && handleLeft <= this.timeline.offsetWidth) {
      this.handle.style.width = handleLeft + "px";
      this.handleCircle.style.marginLeft = handleLeft + "px";
    }

    if (handleLeft < 0) {
      this.handle.style.width = "0px";
      this.handleCircle.style.marginLeft = "0px";
    }
  }

  mouseMove(e) {
    this.handlePosition(e.pageX);
    this.setState({ mute: false });

    let volume = ((e.pageX - this.timeline.offsetLeft) / this.timeline.offsetWidth) * 1;

    if (volume >= 1) {
      volume = 1;
    } else if (volume <= 0) {
      volume = 0;
    }

    this.setState({ volume });
    this.props.receiveVolume(this.state.volume);
  }

  mouseDown(e) {
    window.addEventListener('mousemove', this.mouseMove);
    window.addEventListener('mouseup', this.mouseUp);
  }

  mouseUp(e) {
    window.removeEventListener('mousemove', this.mouseMove);
    window.removeEventListener('mouseup', this.mouseUp);
  }

  mute() {
    if (!this.state.mute) {
      this.setState({ mute: true });
      this.props.receiveVolume(0);
    } else {
      this.setState({ mute: false });
      this.props.receiveVolume(this.state.volume);
    }
  }

  render() {
    let volumeClass;

    if (this.state.volume >= .6) {
      volumeClass = 'ap-volume-up';
    } else if (this.state.volume > 0) {
      volumeClass = 'ap-volume-down';
    } else if (this.state.volume <= 0) {
      volumeClass = 'ap-volume-off';
    }

    if (this.state.mute) {
      volumeClass = 'ap-volume-off';
    }

    return (
      <div className="ap-volume-bar">
        <div id="ap-volume-level" onClick={this.mouseMove} ref={timeline => { this.timeline = timeline }}>
          <div id="ap-volume-handle" onMouseDown={this.mouseDown} ref={handle => { this.handle = handle }} />
        </div>
      </div>
    )
  }
}

export default AudioSound;
