# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
require 'open-uri'

User.destroy_all
Playlist.destroy_all
PlaylistTrack.destroy_all

# Users
admin = User.create({
  username: 'Fikafy', 
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
file = open('https://spotify-seeds.s3-us-west-1.amazonaws.com/daft_punk_radio.png')
daft_punk_radio.photo.attach(io: file, filename: 'daft_punk_radio.png')

miike_snow_radio = Playlist.create({ 
  title: 'Miike Snow Radio', 
  user_id: admin.id, 
  playlist_type: 'heavyRotation'
})
file = open('https://spotify-seeds.s3-us-west-1.amazonaws.com/miike_snow_radio.png')
miike_snow_radio.photo.attach(io: file, filename: 'miike_snow_radio.png')

lord_huron_radio = Playlist.create({ 
  title: 'Lord Huron Radio', 
  user_id: admin.id, 
  playlist_type: 'heavyRotation'
})
file = open('https://spotify-seeds.s3-us-west-1.amazonaws.com/lord_huron_radio.png')
lord_huron_radio.photo.attach(io: file, filename: 'lord_huron_radio.png')

# Artists
ratatat = Artist.create({ name: 'Ratatat' })
file = open('https://spotify-seeds.s3-us-west-1.amazonaws.com/ratatat.png')
ratatat.photo.attach(io: file, filename: 'ratatat.png')

daft_punk = Artist.create({ name: 'Daft Punk' })
file = open('https://spotify-seeds.s3-us-west-1.amazonaws.com/daft_punk.png')
daft_punk.photo.attach(io: file, filename: 'daft_punk.png')

the_whitest_boy_alive = Artist.create({ name: 'The Whitest Boy Alive'})
file = open('https://spotify-seeds.s3-us-west-1.amazonaws.com/the_whitest_boy_alive.png')
the_whitest_boy_alive.photo.attach(io: file, filename: 'the_whitest_boy_alive.png')

gorillaz = Artist.create({ name: 'Gorillaz' })
file = open('https://spotify-seeds.s3-us-west-1.amazonaws.com/gorillaz.png')
gorillaz.photo.attach(io: file, filename: 'gorillaz.png')

lord_huron = Artist.create({ name: 'Lord Huron' })
file = open('https://spotify-seeds.s3-us-west-1.amazonaws.com/lord_huron.png')
lord_huron.photo.attach(io: file, filename: 'lord_huron.png')

miike_snow = Artist.create({ name: 'Miike Snow' })
file = open('https://spotify-seeds.s3-us-west-1.amazonaws.com/miike_snow.png')
miike_snow.photo.attach(io: file, filename: 'miike_snow.png')

starfkr = Artist.create({ name: 'Starfkr' })
file = open('https://spotify-seeds.s3-us-west-1.amazonaws.com/starfkr.png')
starfkr.photo.attach(io: file, filename: 'starfkr.png')

phantogram = Artist.create({ name: 'Phantogram' })
file = open('https://spotify-seeds.s3-us-west-1.amazonaws.com/phantogram.png')
phantogram.photo.attach(io: file, filename: 'phantogram.png')

broken_bells = Artist.create({ name: 'Broken Bells' })
file = open('https://spotify-seeds.s3-us-west-1.amazonaws.com/broken_bells.png')
broken_bells.photo.attach(io: file, filename: 'broken_bells.png')

two_door_cinema_club = Artist.create({ name: 'Two Door Cinema Club' })
file = open('https://spotify-seeds.s3-us-west-1.amazonaws.com/two_door_cinema_club.png')
two_door_cinema_club.photo.attach(io: file, filename: 'two_door_cinema_club.png')

spoon = Artist.create({ name: 'Spoon' })
file = open('https://spotify-seeds.s3-us-west-1.amazonaws.com/spoon.png')
spoon.photo.attach(io: file, filename: 'spoon.png')

kavinsky = Artist.create({ name: 'Kavinsky' })
file = open('https://spotify-seeds.s3-us-west-1.amazonaws.com/kavinsky.png')
kavinsky.photo.attach(io: file, filename: 'kavinsky.png')

the_strokes = Artist.create({ name: 'The Strokes' })
file = open('https://spotify-seeds.s3-us-west-1.amazonaws.com/the_strokes.png')
the_strokes.photo.attach(io: file, filename: 'the_strokes.png')

architecture_in_helsinki = Artist.create({ name: 'Architecture In Helsinki' })
file = open('https://spotify-seeds.s3-us-west-1.amazonaws.com/architecture_in_helsinki.png')
architecture_in_helsinki.photo.attach(io: file, filename: 'architecture_in_helsinki.png')

disclosure = Artist.create({ name: 'Disclosure' })
file = open('https://spotify-seeds.s3-us-west-1.amazonaws.com/disclosure.png')
disclosure.photo.attach(io: file, filename: 'disclosure.png')

lake_street_dive = Artist.create({ name: 'Lake Street Dive' })
file = open('https://spotify-seeds.s3-us-west-1.amazonaws.com/lake_street_dive.png')
lake_street_dive.photo.attach(io: file, filename: 'lake_street_dive.png')

vacationer = Artist.create({ name: 'Vacationer' })
file = open('https://spotify-seeds.s3-us-west-1.amazonaws.com/vacationer.png')
vacationer.photo.attach(io: file, filename: 'vacationer.png')

magic_city_hippies = Artist.create({ name: 'Magic City Hippies' })
file = open('https://spotify-seeds.s3-us-west-1.amazonaws.com/magic_city_hippies.png')
magic_city_hippies.photo.attach(io: file, filename: 'magic_city_hippies.png')

alabama_shakes = Artist.create({ name: 'Alabama Shakes' })
file = open('https://spotify-seeds.s3-us-west-1.amazonaws.com/alabama_shakes.png')
alabama_shakes.photo.attach(io: file, filename: 'alabama_shakes.png')

greta_van_fleet = Artist.create({ name: 'Greta Van Fleet' })
file = open('https://spotify-seeds.s3-us-west-1.amazonaws.com/greta_van_fleet.png')
greta_van_fleet.photo.attach(io: file, filename: 'greta_van_fleet.png')

bahamas = Artist.create({ name: 'Bahamas' })
file = open('https://spotify-seeds.s3-us-west-1.amazonaws.com/bahamas.png')
bahamas.photo.attach(io: file, filename: 'bahamas.png')

basement_jaxx = Artist.create({ name: 'Basement Jaxx' })
file = open('https://spotify-seeds.s3-us-west-1.amazonaws.com/basement_jaxx.png')
basement_jaxx.photo.attach(io: file, filename: 'basement_jaxx.png')

# Albums
ratatat_creamOnChrome = Album.create({
  title: 'Cream on Chrome',
  yr: 2015,
  artist_id: ratatat.id
})
file = open('https://spotify-seeds.s3-us-west-1.amazonaws.com/ratatat_creamOnChrome.png')
ratatat_creamOnChrome.photo.attach(io: file, filename: 'ratatat_creamOnChrome.png')

ratatat_magnifique = Album.create({
  title: 'Magnifique',
  yr: 2015,
  artist_id: ratatat.id
})
file = open('https://spotify-seeds.s3-us-west-1.amazonaws.com/ratatat_magnifique.png')
ratatat_magnifique.photo.attach(io: file, filename: 'ratatat_magnifique.png')

daft_punk_instantAccessMemories = Album.create({
  title: 'Random Access Memories',
  yr: 2013,
  artist_id: daft_punk.id
})
file = open('https://spotify-seeds.s3-us-west-1.amazonaws.com/daft_punk_instantAccessMemories.png')
daft_punk_instantAccessMemories.photo.attach(io: file, filename: 'daft_punk_instantAccessMemories.png')

daft_punk_discovery = Album.create({
  title: 'Discovery',
  yr: 2001,
  artist_id: daft_punk.id
})
file = open('https://spotify-seeds.s3-us-west-1.amazonaws.com/daft_punk_discovery.png')
daft_punk_discovery.photo.attach(io: file, filename: 'daft_punk_discovery.png')

the_whitest_boy_alive_dreams = Album.create({
  title: 'Dreams',
  yr: 2006,
  artist_id: the_whitest_boy_alive.id
})
file = open('https://spotify-seeds.s3-us-west-1.amazonaws.com/the_whitest_boy_alive_dreams.png')
the_whitest_boy_alive_dreams.photo.attach(io: file, filename: 'the_whitest_boy_alive_dreams.png') 

gorillaz_demonDays = Album.create({
  title: 'Demon Days',
  yr: 2005,
  artist_id: gorillaz.id
})
file = open('https://spotify-seeds.s3-us-west-1.amazonaws.com/gorillaz_demonDays.png')
gorillaz_demonDays.photo.attach(io: file, filename: 'gorillaz_demonDays.png')

gorillaz_clintEastwood = Album.create({
  title: 'Clint Eastwood',
  yr: 2001,
  artist_id: gorillaz.id
})
file = open('https://spotify-seeds.s3-us-west-1.amazonaws.com/gorillaz_clintEastwood.png')
gorillaz_clintEastwood.photo.attach(io: file, filename: 'gorillaz_clintEastwood.png')

lord_huron_strangeTrails = Album.create({
  title: 'Strange Trails',
  yr: 2015,
  artist_id: lord_huron.id
})
file = open('https://spotify-seeds.s3-us-west-1.amazonaws.com/lord_huron_strangeTrails.png')
lord_huron_strangeTrails.photo.attach(io: file, filename: 'lord_huron_strangeTrails.png')

miike_snow_miikeSnow = Album.create({
  title: 'Miike Snow',
  yr: 2009,
  artist_id: miike_snow.id
})
file = open('https://spotify-seeds.s3-us-west-1.amazonaws.com/miike_snow_miikeSnow.png')
miike_snow_miikeSnow.photo.attach(io: file, filename: 'miike_snow_miikeSnow.png')

miike_snow_iii = Album.create({
  title: 'iii',
  yr: 2016,
  artist_id: miike_snow.id
})
file = open('https://spotify-seeds.s3-us-west-1.amazonaws.com/miike_snow_iii.png')
miike_snow_iii.photo.attach(io: file, filename: 'miike_snow_iii.png')

starfkr_jupiter = Album.create({
  title: 'Jupiter',
  yr: 2009,
  artist_id: starfkr.id
})
file = open('https://spotify-seeds.s3-us-west-1.amazonaws.com/starfkr_jupiter.png')
starfkr_jupiter.photo.attach(io: file, filename: 'starfkr_jupiter.png')

phantogram_three = Album.create({
  title: 'Three',
  yr: 2016,
  artist_id: phantogram.id
})
file = open('https://spotify-seeds.s3-us-west-1.amazonaws.com/phantogram_three.png')
phantogram_three.photo.attach(io: file, filename: 'phantogram_three.png')

broken_bells_goodLuck = Album.create({
  title: 'Good Luck',
  yr: 2019,
  artist_id: broken_bells.id
})
file = open('https://spotify-seeds.s3-us-west-1.amazonaws.com/broken_bells_goodLuck.png')
broken_bells_goodLuck.photo.attach(io: file, filename: 'broken_bells_goodLuck.png')

two_door_cinema_club_touristHistory = Album.create({
  title: 'Tourist History',
  yr: 2010,
  artist_id: two_door_cinema_club.id
})
file = open('https://spotify-seeds.s3-us-west-1.amazonaws.com/two_door_cinema_club_touristHistory.png')
two_door_cinema_club_touristHistory.photo.attach(io: file, filename: 'two_door_cinema_club_touristHistory.png')

spoon_gimmeFiction = Album.create({
  title: 'Gimme Fiction',
  yr: 2005,
  artist_id: spoon.id
})
file = open('https://spotify-seeds.s3-us-west-1.amazonaws.com/spoon_gimmeFiction.png')
spoon_gimmeFiction.photo.attach(io: file, filename: 'spoon_gimmeFiction.png')

kavinsky_nightcall = Album.create({
  title: 'Nightcall',
  yr: 2010,
  artist_id: kavinsky.id
})
file = open('https://spotify-seeds.s3-us-west-1.amazonaws.com/kavinsky_nightcall.png')
kavinsky_nightcall.photo.attach(io: file, filename: 'kavinsky_nightcall.png')

the_strokes_isThisIt = Album.create({
  title: 'Is This It',
  yr: 2001,
  artist_id: the_strokes.id
})
file = open('https://spotify-seeds.s3-us-west-1.amazonaws.com/the_strokes_isThisIt.png')
the_strokes_isThisIt.photo.attach(io: file, filename: 'the_strokes_isThisIt.png')

architecture_in_helsinki_contactHigh = Album.create({
  title: 'Contact High',
  yr: 2011,
  artist_id: architecture_in_helsinki.id
})
file = open('https://spotify-seeds.s3-us-west-1.amazonaws.com/architecture_in_helsinki_contactHigh.png')
architecture_in_helsinki_contactHigh.photo.attach(io: file, filename: 'architecture_in_helsinki_contactHigh.png')

disclosure_settleTheRemixes = Album.create({
  title: 'Settle(The Remixes)',
  yr: 2013,
  artist_id: disclosure.id
})
file = open('https://spotify-seeds.s3-us-west-1.amazonaws.com/disclosure_settleTheRemixes.png')
disclosure_settleTheRemixes.photo.attach(io: file, filename: 'disclosure_settleTheRemixes.png')

lake_street_dive_funMachine = Album.create({
  title: 'Fun Machine',
  yr: 2012,
  artist_id: lake_street_dive.id
})
file = open('https://spotify-seeds.s3-us-west-1.amazonaws.com/lake_street_dive_funMachine.png')
lake_street_dive_funMachine.photo.attach(io: file, filename: 'lake_street_dive_funMachine.png')

vacationer_relief = Album.create({
  title: 'Relief',
  yr: 2014,
  artist_id: vacationer.id
})
file = open('https://spotify-seeds.s3-us-west-1.amazonaws.com/vacationer_relief.png')
vacationer_relief.photo.attach(io: file, filename: 'vacationer_relief.png')

magic_city_hippies_hippieCastleEP = Album.create({
  title: 'Hippie Castle EP',
  yr: 2014,
  artist_id: vacationer.id
})
file = open('https://spotify-seeds.s3-us-west-1.amazonaws.com/magic_city_hippies_hippieCastleEP.png')
magic_city_hippies_hippieCastleEP.photo.attach(io: file, filename: 'magic_city_hippies_hippieCastleEP.png')

alabama_shakes_soundAndColor = Album.create({
  title: 'Sound & Color',
  yr: 2015,
  artist_id: alabama_shakes.id
})
file = open('https://spotify-seeds.s3-us-west-1.amazonaws.com/alabama_shakes_soundAndColor.png')
alabama_shakes_soundAndColor.photo.attach(io: file, filename: 'alabama_shakes_soundAndColor.png')

greta_van_fleet_fromTheFires = Album.create({
  title: 'From the Fires',
  yr: 2017,
  artist_id: greta_van_fleet.id
})
file = open('https://spotify-seeds.s3-us-west-1.amazonaws.com/greta_van_fleet_fromtheFires.png')
greta_van_fleet_fromtheFires.photo.attach(io: file, filename: 'greta_van_fleet_fromtheFires.png')

basement_jaxx_junto= Album.create({
  title: 'Junto',
  yr: 2014,
  artist_id: basement_jaxx.id
})
file = open('https://spotify-seeds.s3-us-west-1.amazonaws.com/basement_jaxx_junto.png')
basement_jaxx_junto.photo.attach(io: file, filename: 'basement_jaxx_junto.png')

# Tracks
ratatat_track_creamOnChrome = Track.create({
  title: 'Cream on Chrome',
  album_id: ratatat_creamOnChrome.id,
  artist_id: ratatat.id,
  ord: 2
})
file = open('https://spotify-seeds.s3-us-west-1.amazonaws.com/cream_on_chrome.mp3')
ratatat_track_creamOnChrome.audio.attach(io: file, filename: 'cream_on_chrome.mp3') 

ratatat_track_abrasive = Track.create({
  title: 'Abrasive',
  album_id: ratatat_magnifique.id,
  artist_id: ratatat.id,
  ord: 4
})
file = open('https://spotify-seeds.s3-us-west-1.amazonaws.com/abrasive.mp3')
ratatat_track_abrasive.audio.attach(io: file, filename: 'abrasive.mp3') 

ratatat_track_pricksOfBrightness = Track.create({
  title: 'Pricks of Brightness',
  album_id: ratatat_magnifique.id,
  artist_id: ratatat.id,
  ord: 7
})
file = open('https://spotify-seeds.s3-us-west-1.amazonaws.com/pricks_of_brightness.mp3')
ratatat_track_pricksOfBrightness.audio.attach(io: file, filename: 'pricks_of_brightness.mp3') 

ratatat_track_supreme = Track.create({
  title: 'Supreme',
  album_id: ratatat_magnifique.id,
  artist_id: ratatat.id,
  ord: 10
})
file = open('https://spotify-seeds.s3-us-west-1.amazonaws.com/supreme.mp3')
ratatat_track_supreme.audio.attach(io: file, filename: 'supreme.mp3') 

ratatat_track_rome = Track.create({
  title: 'Rome',
  album_id: ratatat_magnifique.id,
  artist_id: ratatat.id,
  ord: 11
})
file = open('https://spotify-seeds.s3-us-west-1.amazonaws.com/rome.mp3')
ratatat_track_rome.audio.attach(io: file, filename: 'rome.mp3') 

daft_punk_track_instantCrush = Track.create({
  title: 'Instant Crush',
  album_id: daft_punk_instantAccessMemories.id,
  artist_id: daft_punk.id,
  ord: 5
})
file = open('https://spotify-seeds.s3-us-west-1.amazonaws.com/instant_crush.mp3')
daft_punk_track_instantCrush.audio.attach(io: file, filename: 'instant_crush.mp3') 

daft_punk_track_somethingAboutUs = Track.create({
  title: 'Something About Us',
  album_id: daft_punk_discovery.id,
  artist_id: daft_punk.id,
  ord: 9
})
file = open('https://spotify-seeds.s3-us-west-1.amazonaws.com/something_about_us.mp3')
daft_punk_track_somethingAboutUs.audio.attach(io: file, filename: 'something_about_us.mp3') 

the_whitest_boy_alive_track_burning = Track.create({
  title: 'Burning',
  album_id: the_whitest_boy_alive_dreams.id,
  artist_id: the_whitest_boy_alive.id,
  ord: 1
})
file = open('https://spotify-seeds.s3-us-west-1.amazonaws.com/burning.mp3')
the_whitest_boy_alive_track_burning.audio.attach(io: file, filename: 'burning.mp3') 

gorillaz_track_feelGoodInc = Track.create({
  title: 'Feel Good Inc.',
  album_id: gorillaz_demonDays.id,
  artist_id: gorillaz.id,
  ord: 1
})
file = open('https://spotify-seeds.s3-us-west-1.amazonaws.com/feel_good_inc.mp3')
gorillaz_track_feelGoodInc.audio.attach(io: file, filename: 'feel_good_inc.mp3') 

gorillaz_track_clintEastwood = Track.create({
  title: 'Clint Eastwood',
  album_id: gorillaz_clintEastwood.id,
  artist_id: gorillaz.id,
  ord: 1
})
file = open('https://spotify-seeds.s3-us-west-1.amazonaws.com/clint_eastwood.mp3')
gorillaz_track_clintEastwood.audio.attach(io: file, filename: 'clint_eastwood.mp3') 

lord_huron_track_theNightWeMet = Track.create({
  title: 'The Night We Met',
  album_id: lord_huron_strangeTrails.id,
  artist_id: lord_huron.id,
  ord: 14
})
file = open('https://spotify-seeds.s3-us-west-1.amazonaws.com/the_night_we_met.mp3')
lord_huron_track_theNightWeMet.audio.attach(io: file, filename: 'the_night_we_met.mp3')  

miike_snow_track_blackAndBlue = Track.create({
  title: 'Black & Blue',
  album_id: miike_snow_miikeSnow.id,
  artist_id: miike_snow.id,
  ord: 5
})
file = open('https://spotify-seeds.s3-us-west-1.amazonaws.com/black_and_blue.mp3')
miike_snow_track_blackAndBlue.audio.attach(io: file, filename: 'black_and_blue.mp3') 

miike_snow_track_songForNoOne = Track.create({
  title: 'Song for No One',
  album_id: miike_snow_miikeSnow.id,
  artist_id: miike_snow.id,
  ord: 4
})
file = open('https://spotify-seeds.s3-us-west-1.amazonaws.com/black_and_blue.mp3')
miike_snow_track_blackAndBlue.audio.attach(io: file, filename: 'black_and_blue.mp3') 

miike_snow_track_myTrigger = Track.create({
  title: 'My Trigger',
  album_id: miike_snow_iii.id,
  artist_id: miike_snow.id,
  ord: 1
})
file = open('https://spotify-seeds.s3-us-west-1.amazonaws.com/my_trigger.mp3')
miike_snow_track_blackAndBlue.audio.attach(io: file, filename: 'my_trigger.mp3') 

miike_snow_track_theHeartOfMe = Track.create({
  title: 'The Heart of Me',
  album_id: miike_snow_iii.id,
  artist_id: miike_snow.id,
  ord: 2
})
file = open('https://spotify-seeds.s3-us-west-1.amazonaws.com/the_heart_of_me.mp3')
miike_snow_track_theHeartOfMe.audio.attach(io: file, filename: 'the_heart_of_me.mp3') 

miike_snow_track_backOfTheCar = Track.create({
  title: 'Back of the Car',
  album_id: miike_snow_iii.id,
  artist_id: miike_snow.id,
  ord: 7
})
file = open('https://spotify-seeds.s3-us-west-1.amazonaws.com/back_of_the_car.mp3')
miike_snow_track_backOfTheCar.audio.attach(io: file, filename: 'back_of_the_car.mp3') 

starfkr_track_girlsJustWantToHaveFun= Track.create({
  title: 'Girls Just Want To Have Fun',
  album_id: starfkr_jupiter.id,
  artist_id: starfkr.id,
  ord: 6
})
file = open('https://spotify-seeds.s3-us-west-1.amazonaws.com/my_trigger.mp3')
miike_snow_track_blackAndBlue.audio.attach(io: file, filename: 'my_trigger.mp3') 

phantogram_track_youreMine= Track.create({
  title: 'You\'re Mine',
  album_id: phantogram_three.id,
  artist_id: phantogram.id,
  ord: 6
})
file = open('https://spotify-seeds.s3-us-west-1.amazonaws.com/you\'re_mine.mp3')
phantogram_track_youreMine.audio.attach(io: file, filename: 'you\'re_mine.mp3') 

broken_bells_track_goodLuck= Track.create({
  title: 'Good Luck',
  album_id: broken_bells_goodLuck.id,
  artist_id: broken_bells.id,
  ord: 1
})
file = open('https://spotify-seeds.s3-us-west-1.amazonaws.com/good_luck.mp3')
broken_bells_track_goodLuck.audio.attach(io: file, filename: 'good_luck.mp3')

two_door_cinema_club_track_whatYouKnow= Track.create({
  title: 'What You Know',
  album_id: two_door_cinema_club_touristHistory.id,
  artist_id: two_door_cinema_club.id,
  ord: 1
})
file = open('https://spotify-seeds.s3-us-west-1.amazonaws.com/what_you_know.mp3')
two_door_cinema_club_track_whatYouKnow.audio.attach(io: file, filename: 'what_you_know.mp3')

two_door_cinema_club_track_undercoverMartyn= Track.create({
  title: 'Undercover Martyn',
  album_id: two_door_cinema_club_touristHistory.id,
  artist_id: two_door_cinema_club.id,
  ord: 3
})
file = open('https://spotify-seeds.s3-us-west-1.amazonaws.com/undercover_martyn.mp3')
two_door_cinema_club_track_undercoverMartyn.audio.attach(io: file, filename: 'undercover_martyn.mp3')

spoon_track_iTurnMyCameraOn= Track.create({
  title: 'I Turn My Camera On',
  album_id: spoon_gimmeFiction.id,
  artist_id: spoon.id,
  ord: 3
})
file = open('https://spotify-seeds.s3-us-west-1.amazonaws.com/i_turn_my_camera_on.mp3')
spoon_track_iTurnMyCameraOn.audio.attach(io: file, filename: 'i_turn_my_camera_on.mp3')

kavinsky_track_nightcall= Track.create({
  title: 'Nightcall',
  album_id: kavinsky_nightcall.id,
  artist_id: kavinsky.id,
  ord: 1
})
file = open('https://spotify-seeds.s3-us-west-1.amazonaws.com/nightcall.mp3')
kavinsky_track_nightcall.audio.attach(io: file, filename: 'nightcall.mp3')

the_strokes_track_someday= Track.create({
  title: 'Someday',
  album_id: the_strokes_isThisIt.id,
  artist_id: the_strokes.id,
  ord: 5
})
file = open('https://spotify-seeds.s3-us-west-1.amazonaws.com/someday.mp3')
the_strokes_track_someday.audio.attach(io: file, filename: 'someday.mp3')

architecture_in_helsinki__track_contactHigh= Track.create({
  title: 'Contact High',
  album_id: architecture_in_helsinki_contactHigh.id,
  artist_id: architecture_in_helsinki.id,
  ord: 1
})
file = open('https://spotify-seeds.s3-us-west-1.amazonaws.com/contact_high.mp3')
architecture_in_helsinki__track_contactHigh.audio.attach(io: file, filename: 'someday.mp3')

disclosure_track_youAndMe= Track.create({
  title: 'You & Me',
  album_id: disclosure_settleTheRemixes.id,
  artist_id: disclosure.id,
  ord: 8
})
file = open('https://spotify-seeds.s3-us-west-1.amazonaws.com/you_and_me.mp3')
disclosure_track_youAndMe.audio.attach(io: file, filename: 'you_and_me.mp3')

lake_street_dive_track_richGirl= Track.create({
  title: 'Rich Girl',
  album_id: lake_street_dive_funMachine.id,
  artist_id: lake_street_dive.id,
  ord: 4
})
file = open('https://spotify-seeds.s3-us-west-1.amazonaws.com/rich_girl.mp3')
lake_street_dive_track_richGirl.audio.attach(io: file, filename: 'rich_girl.mp3')

lake_street_dive_track_iWantYouBack= Track.create({
  title: 'I Want You Back',
  album_id: lake_street_dive_funMachine.id,
  artist_id: lake_street_dive.id,
  ord: 3
})
file = open('https://spotify-seeds.s3-us-west-1.amazonaws.com/i_want_you_back.mp3')
lake_street_dive_track_iWantYouBack.audio.attach(io: file, filename: 'i_want_you_back.mp3')

vacationer_track_paradiseWaiting= Track.create({
  title: 'Paradise Waiting',
  album_id: vacationer_relief.id,
  artist_id: vacationer.id,
  ord: 2
})
file = open('https://spotify-seeds.s3-us-west-1.amazonaws.com/paradise_waiting.mp3')
vacationer_track_paradiseWaiting.audio.attach(io: file, filename: 'paradise_waiting.mp3')

magic_city_hippies_track_limestone= Track.create({
  title: 'Limestone',
  album_id: magic_city_hippies_hippieCastleEP.id,
  artist_id: magic_city_hippies.id,
  ord: 5
})
file = open('https://spotify-seeds.s3-us-west-1.amazonaws.com/limestone.mp3')
magic_city_hippies_track_limestone.audio.attach(io: file, filename: 'limestone.mp3')


alabama_shakes_track_dontWannaFight= Track.create({
  title: 'Don\'t Wanna Fight',
  album_id: alabama_shakes_soundAndColor.id,
  artist_id: alabama_shakes.id,
  ord: 2
})
file = open('https://spotify-seeds.s3-us-west-1.amazonaws.com/don\'t_wanna_fight.mp3')
alabama_shakes_track_dontWannaFight.audio.attach(io: file, filename: 'don\'t_wanna_fight.mp3')

alabama_shakes_track_soundAndColor= Track.create({
  title: 'Sound & Color',
  album_id: alabama_shakes_soundAndColor.id,
  artist_id: alabama_shakes.id,
  ord: 1
})
file = open('https://spotify-seeds.s3-us-west-1.amazonaws.com/sound_and_color.mp3')
alabama_shakes_track_soundAndColor.audio.attach(io: file, filename: 'sound_and_color.mp3')

greta_van_fleet_track_aChangeIsGonnaCome= Track.create({
  title: 'A Change Is Gonna Come',
  album_id: greta_van_fleet_fromTheFires.id,
  artist_id: greta_van_fleet.id,
  ord: 4
})
file = open('https://spotify-seeds.s3-us-west-1.amazonaws.com/a_change_is_gonna_come.mp3')
greta_van_fleet_track_aChangeIsGonnaCome.audio.attach(io: file, filename: 'a_change_is_gonna_come.mp3')

bahamas_track_allTheTime= Track.create({
  title: 'All the Time',
  album_id: bahamas_bahamasIsAfie.id,
  artist_id: bahamas.id,
  ord: 4
})
file = open('https://spotify-seeds.s3-us-west-1.amazonaws.com/all_the_time.mp3')
bahamas_track_allTheTime.audio.attach(io: file, filename: 'all_the_time.mp3')

basement_jaxx_track_neverSayNever= Track.create({
  title: 'Never Say Never',
  album_id: basement_jaxx_junto.id,
  artist_id: basement_jaxx.id,
  ord: 4
})
file = open('https://spotify-seeds.s3-us-west-1.amazonaws.com/never_say_never.mp3')
basement_jaxx_track_neverSayNever.audio.attach(io: file, filename: 'never_say_never.mp3')

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

daft_punk_radio_track5 = PlaylistTrack.create({
  playlist_id: daft_punk_radio.id,
  track_id: kavinsky_track_nightcall.id
})

daft_punk_radio_track6 = PlaylistTrack.create({
  playlist_id: daft_punk_radio.id,
  track_id: the_strokes_track_someday.id
})

daft_punk_radio_track7 = PlaylistTrack.create({
  playlist_id: daft_punk_radio.id,
  track_id: architecture_in_helsinki__track_contactHigh.id
})

daft_punk_radio_track8 = PlaylistTrack.create({
  playlist_id: daft_punk_radio.id,
  track_id: disclosure_track_youAndMe.id
})

daft_punk_radio_track9 = PlaylistTrack.create({
  playlist_id: daft_punk_radio.id,
  track_id: daft_punk_track_somethingAboutUs.id
})

daft_punk_radio_track10 = PlaylistTrack.create({
  playlist_id: daft_punk_radio.id,
  track_id: gorillaz_track_clintEastwood.id
})

miike_snow_radio_track1 = PlaylistTrack.create({
  playlist_id: miike_snow_radio.id,
  track_id: miike_snow_track_blackAndBlue.id
})

miike_snow_radio_track2 = PlaylistTrack.create({
  playlist_id: miike_snow_radio.id,
  track_id: starfkr_track_girlsJustWantToHaveFun.id
})

miike_snow_radio_track3 = PlaylistTrack.create({
  playlist_id: miike_snow_radio.id,
  track_id: two_door_cinema_club_track_undercoverMartyn.id
})

miike_snow_radio_track4 = PlaylistTrack.create({
  playlist_id: miike_snow_radio.id,
  track_id: phantogram_track_youreMine.id
})

miike_snow_radio_track5 = PlaylistTrack.create({
  playlist_id: miike_snow_radio.id,
  track_id: broken_bells_track_goodLuck.id
})

miike_snow_radio_track6 = PlaylistTrack.create({
  playlist_id: miike_snow_radio.id,
  track_id: miike_snow_track_myTrigger.id
})

miike_snow_radio_track7 = PlaylistTrack.create({
  playlist_id: miike_snow_radio.id,
  track_id: two_door_cinema_club_track_whatYouKnow.id
})

miike_snow_radio_track8 = PlaylistTrack.create({
  playlist_id: miike_snow_radio.id,
  track_id: miike_snow_track_theHeartOfMe.id
})

miike_snow_radio_track9 = PlaylistTrack.create({
  playlist_id: miike_snow_radio.id,
  track_id: spoon_track_iTurnMyCameraOn.id
})

miike_snow_radio_track10 = PlaylistTrack.create({
  playlist_id: miike_snow_radio.id,
  track_id: miike_snow_track_backOfTheCar.id
})

lord_huron_radio_track1 = PlaylistTrack.create({
  playlist_id: lord_huron_radio.id,
  track_id: lord_huron_track_theNightWeMet.id
})

lord_huron_radio_track2 = PlaylistTrack.create({
  playlist_id: lord_huron_radio.id,
  track_id: lake_street_dive_track_richGirl.id
})

lord_huron_radio_track3 = PlaylistTrack.create({
  playlist_id: lord_huron_radio.id,
  track_id: alabama_shakes_track_soundAndColor.id
})

lord_huron_radio_track4 = PlaylistTrack.create({
  playlist_id: lord_huron_radio.id,
  track_id: vacationer_track_paradiseWaiting.id
})

lord_huron_radio_track5 = PlaylistTrack.create({
  playlist_id: lord_huron_radio.id,
  track_id: magic_city_hippies_track_limestone.id
})

lord_huron_radio_track6 = PlaylistTrack.create({
  playlist_id: lord_huron_radio.id,
  track_id: alabama_shakes_track_dontWannaFight.id
})

lord_huron_radio_track7 = PlaylistTrack.create({
  playlist_id: lord_huron_radio.id,
  track_id: greta_van_fleet_track_aChangeIsGonnaCome.id
})

lord_huron_radio_track8 = PlaylistTrack.create({
  playlist_id: lord_huron_radio.id,
  track_id: lake_street_dive_track_iWantYouBack.id
})

lord_huron_radio_track9 = PlaylistTrack.create({
  playlist_id: lord_huron_radio.id,
  track_id: bahamas_track_allTheTime.id
})

lord_huron_radio_track10 = PlaylistTrack.create({
  playlist_id: lord_huron_radio.id,
  track_id: basement_jaxx_track_neverSayNever.id
})