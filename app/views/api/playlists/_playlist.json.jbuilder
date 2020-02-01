json.extract! playlist, :id, :title, :user_id, :playlist_type
json.user playlist.user.username
json.trackIds playlist.tracks.pluck(:id)