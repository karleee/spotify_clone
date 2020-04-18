import { connect } from 'react-redux';

import { receiveCurrentTrack, receiveNextTrack } from '../../actions/track_actions';
import { receiveTitle, receiveArtist, receivePlaylistId, receiveAlbumId, receiveIsPlaying } from '../../actions/audio_actions';

import ArtistDetail from './artist_detail';

import { selectTracksFromArtist, selectPlaylistsFromUser } from '../../reducers/selectors';

const mapStateToProps = (state, ownProps) => {
  // Get all artists and albums from local storage
  // Get the artist and their tracks
  const artists = JSON.parse(localStorage.getItem('artists'));
  const albums = JSON.parse(localStorage.getItem('albums'));
  const artist = artists[ownProps.match.params.artistId];
  let tracks = selectTracksFromArtist(state, artist);

  // Before assigning to props check if tracks contains invalid values
  // If so, default to tracks in local storage
  const isInvalid = ele => ele === undefined || ele === null;
  if (tracks.some(isInvalid) || !tracks) tracks = JSON.parse(localStorage.getItem('playlist_tracks'));

  return ({
    artist,
    albums,
    tracks,
    isPlaying: state.ui.isPlaying,
    currentTrack: state.ui.currentTrack
  });
};

const mapDispatchToProps = dispatch => ({ 
  receiveCurrentTrack: track => dispatch(receiveCurrentTrack(track)),
  receiveNextTrack: track => dispatch(receiveNextTrack(track)),
  receiveTitle: title => dispatch(receiveTitle(title)),
  receiveArtist: artist => dispatch(receiveArtist(artist)),
  receiveAlbumId: albumId => dispatch(receiveAlbumId(albumId)),
  receivePlaylistId: playlistId => dispatch(receivePlaylistId(playlistId)),
  receiveIsPlaying: isPlaying => dispatch(receiveIsPlaying(isPlaying))
});

export default connect(mapStateToProps, mapDispatchToProps)(ArtistDetail);