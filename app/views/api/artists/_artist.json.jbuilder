json.extract! artist, :id, :name
json.track_ids artist.tracks.pluck(:id) 