import React from 'react';

class HeavyRotationDetail extends React.Component {
  componentDidMount() {
    this.props.requestSinglePlaylist(this.props.match.params.playlistId);
  }

  render() {
    const { playlist } = this.props;
    if (!playlist) return null;
    return (
      <div className="heavy-rotation-detail-header">
        <p>Playlist</p>
        <h1>{ playlist.title }</h1>
        <p>Created by Spotify</p>
        {/* Call TrackIndex component, pass the playlist as a prop so that it can access the playlist's tracks */}
      </div>
    );
  }
}

export default HeavyRotationDetail;