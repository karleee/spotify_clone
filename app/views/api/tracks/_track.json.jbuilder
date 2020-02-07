  json.extract! track, :id, :title, :artist_id, :album_id, :ord
  json.artist track.artist.name
  json.album track.album.title
  
  if track.audio.attached? 
    json.audio_url url_for(track.audio)
  end