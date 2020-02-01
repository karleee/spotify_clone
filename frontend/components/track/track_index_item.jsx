import React from 'react';

class TrackIndexItem extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { track } = this.props;

    return (
      <li>
        <div className="track-info">
          <i className="music-note-icon"></i>
          <div className="track-text">
            <p>{ track.title }</p>
            <p>{ track.artist } • { track.album }</p>   
          </div>
        </div>
      </li>
    );
  }
}

export default TrackIndexItem;
