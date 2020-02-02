json.album do
  json.set! @album.id do
    json.partial! 'api/albums/album', album: @album
    json.trackIds @album.tracks.pluck(:id)
  end 
end

json.tracks do
  @album.tracks.each do | track |
    json.set! track.id do 
      json.partial! 'api/tracks/track', track: track
    end
  end
end