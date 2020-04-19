json.extract! playlist, :id, :title, :user_id, :playlist_type
json.track_ids playlist.tracks.pluck(:id)
json.photo_url url_for(playlist.photo)