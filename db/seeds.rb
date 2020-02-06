# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.destroy_all
Playlist.destroy_all
PlaylistTrack.destroy_all

# Users

admin = User.create({
  username: 'Spotify', 
  email: 'admin@gmail.com', 
  gender: 'female',
  birthday: Date.new(1995),
  password:'123456'
})

# Playlists
daft_punk_radio = Playlist.create({ 
  title: 'Daft Punk Radio', 
  user_id: admin.id, 
  playlist_type: 'heavyRotation'
})
photo = File.open('/Users/karenlee/Desktop/playlists/daft_punk_radio.png')
daft_punk_radio.photo.attach(io: photo, filename: 'daft_punk_radio.png')

miike_snow_radio = Playlist.create({ 
  title: 'Miike Snow Radio', 
  user_id: admin.id, 
  playlist_type: 'heavyRotation'
})
photo = File.open('/Users/karenlee/Desktop/playlists/miike_snow_radio.png')
miike_snow_radio.photo.attach(io: photo, filename: 'miike_snow_radio.png')

lord_huron_radio = Playlist.create({ 
  title: 'Lord Huron Radio', 
  user_id: admin.id, 
  playlist_type: 'heavyRotation'
})
photo = File.open('/Users/karenlee/Desktop/playlists/lord_huron_radio.png')
lord_huron_radio.photo.attach(io: photo, filename: 'lord_huron_radio.png')

# Artists
ratatat = Artist.create({ name: 'Ratatat' })
julian_casablancas = Artist.create({ name: 'Julian Casablancas'})
daft_punk = Artist.create({ name: 'Daft Punk' })
the_whitest_boy_alive = Artist.create({ name: 'The Whitest Boy Alive'})
gorillaz = Artist.create({ name: 'Gorillaz' })
lord_huron = Artist.create({ name: 'Lord Huron' })


# Albums
ratatat_creamOnChrome = Album.create({
  title: 'Cream on Chrome',
  yr: 2015,
  artist_id: ratatat.id
})
photo = File.open('/Users/karenlee/Desktop/albums/ratatat_creamOnChrome.png')
ratatat_creamOnChrome.photo.attach(io: photo, filename: 'ratatat_creamOnChrome.png')

ratatat_magnifique = Album.create({
  title: 'Magnifique',
  yr: 2015,
  artist_id: ratatat.id
})
photo = File.open('/Users/karenlee/Desktop/albums/ratatat_magnifique.png')
ratatat_magnifique.photo.attach(io: photo, filename: 'ratatat_magnifique.png')

daft_punk_instantAccessMemories = Album.create({
  title: 'Random Access Memories',
  yr: 2013,
  artist_id: daft_punk.id
})
photo = File.open('/Users/karenlee/Desktop/albums/daft_punk_instantAccessMemories.png')
daft_punk_instantAccessMemories.photo.attach(io: photo, filename: 'daft_punk_instantAccessMemories.png')

the_whitest_boy_alive_dreams = Album.create({
  title: 'Dreams',
  yr: 2006,
  artist_id: the_whitest_boy_alive.id
})
photo = File.open('/Users/karenlee/Desktop/albums/the_whitest_boy_alive_dreams.png')
the_whitest_boy_alive_dreams.photo.attach(io: photo, filename: 'the_whitest_boy_alive_dreams.png')

gorillaz_demonDays = Album.create({
  title: 'Demon Days',
  yr: 2005,
  artist_id: gorillaz.id
})
photo = File.open('/Users/karenlee/Desktop/albums/gorillaz_demonDays.png')
gorillaz_demonDays.photo.attach(io: photo, filename: 'gorillaz_demonDays.png')

lord_huron_strangeTrails = Album.create({
  title: 'Strange Trails',
  yr: 2015,
  artist_id: lord_huron.id
})
photo = File.open('/Users/karenlee/Desktop/albums/lord_huron_strangeTrails.png')
lord_huron_strangeTrails.photo.attach(io: photo, filename: 'lord_huron_strangeTrails.png')

# Tracks
ratatat_track_creamOnChrome = Track.create({
  title: 'Cream on Chrome',
  album_id: ratatat_creamOnChrome.id,
  artist_id: ratatat.id,
  ord: 2
})
audio = File.open('/Users/karenlee/Desktop/audio/cream_on_chrome.mp3')
ratatat_track_creamOnChrome.audio.attach(io: audio, filename: 'cream_on_chrome.mp3') 

ratatat_track_abrasive = Track.create({
  title: 'Abrasive',
  album_id: ratatat_magnifique.id,
  artist_id: ratatat.id,
  ord: 4
})
audio = File.open('/Users/karenlee/Desktop/audio/abrasive.mp3')
ratatat_track_abrasive.audio.attach(io: audio, filename: 'abrasive.mp3') 

ratatat_track_pricksOfBrightness = Track.create({
  title: 'Pricks of Brightness',
  album_id: ratatat_magnifique.id,
  artist_id: ratatat.id,
  ord: 7
})
audio = File.open('/Users/karenlee/Desktop/audio/pricks_of_brightness.mp3')
ratatat_track_pricksOfBrightness.audio.attach(io: audio, filename: 'pricks_of_brightness.mp3') 

ratatat_track_supreme = Track.create({
  title: 'Supreme',
  album_id: ratatat_magnifique.id,
  artist_id: ratatat.id,
  ord: 10
})
audio = File.open('/Users/karenlee/Desktop/audio/supreme.mp3')
ratatat_track_supreme.audio.attach(io: audio, filename: 'supreme.mp3') 

ratatat_track_rome = Track.create({
  title: 'Rome',
  album_id: ratatat_magnifique.id,
  artist_id: ratatat.id,
  ord: 11
})
audio = File.open('/Users/karenlee/Desktop/audio/rome.mp3')
ratatat_track_rome.audio.attach(io: audio, filename: 'rome.mp3') 

daft_punk_track_instantCrush = Track.create({
  title: 'Instant Crush',
  album_id: daft_punk_instantAccessMemories.id,
  artist_id: daft_punk.id,
  ord: 5
})
audio = File.open('/Users/karenlee/Desktop/audio/instant_crush.mp3')
daft_punk_track_instantCrush.audio.attach(io: audio, filename: 'instant_crush.mp3') 

the_whitest_boy_alive_track_burning = Track.create({
  title: 'Burning',
  album_id: the_whitest_boy_alive_dreams.id,
  artist_id: the_whitest_boy_alive.id,
  ord: 1
})
audio = File.open('/Users/karenlee/Desktop/audio/burning.mp3')
the_whitest_boy_alive_track_burning.audio.attach(io: audio, filename: 'burning.mp3') 

gorillaz_track_feelGoodInc = Track.create({
  title: 'Feel Good Inc.',
  album_id: gorillaz_demonDays.id,
  artist_id: gorillaz.id,
  ord: 1
})
audio = File.open('/Users/karenlee/Desktop/audio/feel_good_inc.mp3')
gorillaz_track_feelGoodInc.audio.attach(io: audio, filename: 'feel_good_inc.mp3') 

lord_huron_track_theNightWeMet = Track.create({
  title: 'The Night We Met',
  album_id: lord_huron_strangeTrails.id,
  artist_id: lord_huron.id,
  ord: 14
})
audio = File.open('/Users/karenlee/Desktop/audio/the_night_we_met.mp3')
lord_huron_track_theNightWeMet.audio.attach(io: audio, filename: 'the_night_we_met.mp3') 

# Playlist Tracks
daft_punk_radio_track1 = PlaylistTrack.create({
  playlist_id: daft_punk_radio.id,
  track_id: ratatat_track_creamOnChrome.id
})

daft_punk_radio_track2 = PlaylistTrack.create({
  playlist_id: daft_punk_radio.id,
  track_id: daft_punk_track_instantCrush.id
})

daft_punk_radio_track3 = PlaylistTrack.create({
  playlist_id: daft_punk_radio.id,
  track_id: the_whitest_boy_alive_track_burning.id
})

daft_punk_radio_track4 = PlaylistTrack.create({
  playlist_id: daft_punk_radio.id,
  track_id: gorillaz_track_feelGoodInc.id
})

lord_huron_radio_track1 = PlaylistTrack.create({
  playlist_id: lord_huron_radio.id,
  track_id: lord_huron_track_theNightWeMet.id
})