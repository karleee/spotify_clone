# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.destroy_all;
Playlist.destroy_all;

admin = User.create({
  username: 'admin', 
  email: 'admin@gmail.com', 
  gender: 'female',
  birthday: Date.new(1995),
  password:'123456'
})

# miike_snow = User.create({
#   username: 'Miike Snow', 
#   email: 'miikeSnow@gmail.com', 
#   gender: 'male',
#   birthday: Date.new(2007),
#   password:'123456'
# })

# lord_huron = User.create({
#   username: 'Lord Huron', 
#   email: 'lordHuron@gmail.com', 
#   gender: 'male',
#   birthday: Date.new(2012),
#   password:'123456'
# })

daft_punk_Radio = Playlist.create({ 
  title: 'Daft Punk Radio', 
  user_id: 1, 
  playlist_type: 'heavyRotation'
})

miike_snow_Radio = Playlist.create({ 
  title: 'Miike Snow Radio', 
  user_id: 1, 
  playlist_type: 'heavyRotation'
})

lord_huron_Radio = Playlist.create({ 
  title: 'Lord Huron Radio', 
  user_id: 1, 
  playlist_type: 'heavyRotation'
})


# ActiveRecord::Base.transaction do

#   playlists = {
#     '1' => {
#       'title' => 'Successful Playlist',
#       'playlist_type' => 'heavyRotation'
#     }
#   }
# end
