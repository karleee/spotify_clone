json.artist_playlist do
  json.set! @artist_playlist.id do
    json.partial! 'api/artist_playlists/artist_playlist', artist_playlist: @artist_playlist
  end
end

json.tracks do
  @artist_playlist.tracks.each do | track | 
    json.set! track.id do
      json.partial! 'api/tracks/track', track: track
    end 
  end
end 
