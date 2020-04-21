import React from "react";

class AudioDetail extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      artist: '',
      album: null 
    }
  }

  // Replacement for componentWillReceiveProps
  static getDerivedStateFromProps(nextProps, prevState) {
    if (nextProps.title !== prevState.title) return {title: nextProps.title};
    if (nextProps.artist !== prevState.artist) return {artist: nextProps.artist};
    if (nextProps.album !== prevState.album) return {album: nextProps.album}; 
    return null; 
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.title !== this.props.title) this.setState({title: this.state.title});
    if (prevState.artist !== this.props.artist) this.setState({artist: this.state.artist});
    if (prevState.album !== this.props.album) this.setState({album: this.state.album});
  }
  
  componentDidMount() {
    this.props.requestAllAlbums();
  }

  render() {
    const {title, artist, album} = this.state; 

    return (
      <div className="ap-track-detail">
        {album ? <img src={album.photo_url} alt="Current song album cover" />: ""}
        <div className="ap-track-detail-text">
          <p>{title}</p> 
          <p>{artist}</p>
        </div>
      </div>
    );
  }
}

export default AudioDetail;