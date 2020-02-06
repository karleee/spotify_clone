import React from 'react';

class AudioVolume extends React.Component {
  // Constructor for AudioVolume component
  constructor(props) {
    super(props);

    this.state = {
      volume: 1,
      mute: false
    };
    // Binding functions for context of this
    this.handlePosition = this.handlePosition.bind(this);
    this.mouseMove = this.mouseMove.bind(this);
    this.mouseDown = this.mouseDown.bind(this);
    this.mouseUp = this.mouseUp.bind(this);
    this.mute = this.mute.bind(this);
  }

  // Component mounting
  componentDidMount() {
    const { volume } = this.props;

    this.setState({ volume });
    this.handle.style.width = this.timeline.offsetWidth + "px";
    this.handleCircle.style.marginLeft = this.timeline.offsetWidth + "px";
  }

  // Positions the progress bar and handle circle
  handlePosition(position) {
    // let timelineWidth = this.timeline.offsetWidth - this.handle.offsetWidth;
    let handleLeft = position - this.timeline.offsetLeft;

    if (handleLeft > this.timeline.offsetWidth || this.state.volume === 1) {
      this.handle.style.width = this.timeline.offsetWidth + "px";
      this.handleCircle.style.marginLeft = this.timeline.offsetWidth + "px";
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

  // Handles mouse movement
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

  // Switches between mute and not muted
  mute() {
    if (!this.state.mute) {
      this.setState({ mute: true });
      this.props.receiveVolume(0);
    } else {
      this.setState({ mute: false });
      this.props.receiveVolume(this.state.volume);
    }
  }

  // Renders component
  render() {
    let volumeClass;

    if (this.state.volume >= 0.6) {
      volumeClass = "ap-volume-high";
    } else if (this.state.volume > 0) {
      volumeClass = "ap-volume-low";
    } else if (this.state.volume === 0) {
      volumeClass = "ap-volume-off";
    }

    if (this.state.mute) volumeClass = 'ap-volume-off';

    return (
      <div className="ap-volume-controls">
        <div className="ap-volume-icon" onClick={ this.mute }><i className={ volumeClass }></i></div>

        <div id="ap-volume-timeline" onClick={ this.mouseMove } ref={timeline => this.timeline = timeline }>
          <div id="ap-volume-progress-bar">
            <div id="ap-volume-handle" onMouseDown={ this.mouseDown } ref={handle => this.handle = handle } />
            <div id="ap-volume-handle-circle" onMouseDown={ this.mouseDown } ref={handleCircle => this.handleCircle = handleCircle } />
          </div>
        </div>
      </div>
    );
  }
}

export default AudioVolume;