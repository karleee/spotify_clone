  json.extract! track, :id, :title, :artist_id, :album_id, :ord
  json.artist track.artist.name 
  json.album track.album.title