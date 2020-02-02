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

miike_snow_radio = Playlist.create({ 
  title: 'Miike Snow Radio', 
  user_id: admin.id, 
  playlist_type: 'heavyRotation'
})

lord_huron_Radio = Playlist.create({ 
  title: 'Lord Huron Radio', 
  user_id: admin.id, 
  playlist_type: 'heavyRotation'
})

# Artists
ratatat = Artist.create({ name: 'Ratatat' })
julian_casablancas = Artist.create({ name: 'Julian Casablancas'})
daft_punk = Artist.create({ name: 'Daft Punk' })
the_whitest_boy_alive = Artist.create({ name: 'The Whitest Boy Alive'})
gorillaz = Artist.create({ name: 'Gorillaz' })


# Albums
ratatat_magnifique = Album.create({
  title: 'Cream on Chrome',
  yr: 2015,
  artist_id: ratatat.id
})

daft_punk_randomAccessMemories = Album.create({
  title: 'Random Access Memories',
  yr: 2013,
  artist_id: daft_punk.id
})

the_whitest_boy_alive_dreams = Album.create({
  title: 'Dreams',
  yr: 2006,
  artist_id: the_whitest_boy_alive.id
})

gorillaz_feel_good_inc = Album.create({
  title: 'Feel Good Inc.',
  yr: 2005,
  artist_id: gorillaz.id
})

# Tracks
ratatat_track_creamOnChrome = Track.create({
  title: 'Cream on Chrome',
  album_id: ratatat_magnifique.id,
  artist_id: ratatat.id,
  ord: 2
})

ratatat_track_abrasive = Track.create({
  title: 'Abrasive',
  album_id: ratatat_magnifique.id,
  artist_id: ratatat.id,
  ord: 4
})

ratatat_track_pricksOfBrightness = Track.create({
  title: 'Pricks of Brightness',
  album_id: ratatat_magnifique.id,
  artist_id: ratatat.id,
  ord: 7
})

ratatat_track_supreme = Track.create({
  title: 'Supreme',
  album_id: ratatat_magnifique.id,
  artist_id: ratatat.id,
  ord: 10
})

ratatat_track_rome = Track.create({
  title: 'Rome',
  album_id: ratatat_magnifique.id,
  artist_id: ratatat.id,
  ord: 11
})

daft_punk_track_instantCrush = Track.create({
  title: 'Instant Crush',
  album_id: daft_punk_randomAccessMemories.id,
  artist_id: daft_punk.id,
  ord: 5
})

the_whitest_boy_alive_track_burning = Track.create({
  title: 'Burning',
  album_id: the_whitest_boy_alive_dreams.id,
  artist_id: the_whitest_boy_alive.id,
  ord: 1
})

gorillaz_track_feelGoodInc = Track.create({
  title: 'Feel Good Inc.',
  album_id: gorillaz_feel_good_inc.id,
  artist_id: gorillaz.id,
  ord: 1
})

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