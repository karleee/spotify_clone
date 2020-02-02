json.extract! playlist, :id, :title, :user_id, :playlist_type
json.user playlist.user.username
json.track_ids playlist.tracks.pluck(:id)