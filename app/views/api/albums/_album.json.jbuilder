json.extract! album, :id, :title, :yr
json.artist album.artist.name
json.trackIds album.tracks.pluck(:id)
json.artist_id album.artist.id 