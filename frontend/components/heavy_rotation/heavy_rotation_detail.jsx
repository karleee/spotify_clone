import React from 'react';

class HeavyRotationDetail extends React.Component {
  componentDidMount() {
    this.props.requestSinglePlaylist(this.props.match.params.playlistId);
  }

  render() {
    const { playlist } = this.props;
    if (!playlist) return null;
    return (
      <h1>Success!!</h1>
    );
  }
}

export default HeavyRotationDetail;