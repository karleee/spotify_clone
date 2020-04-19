@artist_playlists.each do | artist_playlist |
  json.set! artist_playlist.id do
    json.partial! 'api/artist_playlists/artist_playlist', artist_playlist: artist_playlist
  end
end 