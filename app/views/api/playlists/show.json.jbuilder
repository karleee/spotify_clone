json.playlist do
  json.set! @playlist.id do
    json.partial! 'api/playlists/playlist', playlist: @playlist
  end
end

json.tracks do
  @playlist.tracks.each do | track | 
    json.set! track.id do
      json.partial! 'api/tracks/track', track: track
    end 
  end
end 
