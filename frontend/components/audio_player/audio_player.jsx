import React from 'react';

class AudioPlayer extends React.Component {
  render() {
    const { audio } = this.props;
    
    return (
      <audio src={this.props.audio} autoPlay />
    ); 
  }
}

export default AudioPlayer;