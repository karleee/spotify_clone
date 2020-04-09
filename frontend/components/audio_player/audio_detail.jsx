import React from "react";
import { Link } from 'react-router-dom';

class AudioDetail extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      artist: "",
      album: ""
    }
  }
  
  componentDidMount() {
    this.props.requestAllAlbums();
  }

  componentWillReceiveProps(newProps) {
    if (newProps.title) {
      this.setState({ title: newProps.title })
    }
    if (newProps.artist) {
      this.setState({ artist: newProps.artist })
    }
    if (newProps.albumId) {
      this.setState({ album: state.entities.albums[newProps.albumId] })
    }
  }

  render() {
    const { title, artist, album } = this.props;

    return (
      <div className="ap-track-detail">
        { album ? <img src={ album.photo_url} alt="Current song album cover" />: "" }
        <div className="ap-track-detail-text">
          <p>{ title }</p> 
          <p>{ artist }</p>
        </div>
      </div>
    );
  }
}

export default AudioDetail;
