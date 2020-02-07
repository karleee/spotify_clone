json.extract! artist, :id, :name
json.track_ids artist.tracks.pluck(:id) 
json.photo_url url_for(artist.photo) 