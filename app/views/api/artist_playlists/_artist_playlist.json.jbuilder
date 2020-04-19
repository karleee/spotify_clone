json.extract! artist_playlist, :id, :title, :artist_id
json.track_ids artist_playlist.tracks.pluck(:id)
json.photo_url url_for(artist_playlist.photo)  