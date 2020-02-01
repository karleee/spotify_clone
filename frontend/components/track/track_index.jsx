import React from 'react';
import TrackIndexItem from './track_index_item_container';

class TrackIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { tracks } = this.props; 

    return (
      <ul>
        { tracks.map(track => <TrackIndexItem key={ track['id'] } track={ track } />) } 
      </ul>
    );
  }
}

export default TrackIndex;