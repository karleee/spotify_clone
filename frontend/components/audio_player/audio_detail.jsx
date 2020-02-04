import React from "react";
import { Link } from 'react-router-dom';

class AudioDetail extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      artist: "",
      photoUrl: ""
    }
  }

  componentWillReceiveProps(newProps) {
    if (newProps.title) {
      this.setState({ title: newProps.title })
    }
    if (newProps.artist) {
      this.setState({ artist: newProps.artist })
    }
    if (newProps.photoUrl) {
      this.setState({ photoUrl: newProps.photoUrl })
    }
  }

  render() {
    return (
      <div className="ap-track-detail">
        {/* <p>good</p>
        <p>{ this.state.title }</p> */}
      </div>
    );
  }
}

export default AudioDetail;
