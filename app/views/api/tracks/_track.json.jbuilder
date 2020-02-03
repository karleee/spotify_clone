  json.extract! track, :id, :title, :artist_id, :album_id, :ord
  json.artist track.artist.name
  json.album track.album.title
  json.audio_url url_for(track.audio)