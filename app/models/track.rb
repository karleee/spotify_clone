# == Schema Information
#
# Table name: tracks
#
#  id             :bigint           not null, primary key
#  title          :string           not null
#  album_id       :integer          not null
#  artist_id      :integer          not null
#  ord            :integer          not null
#  created_at     :datetime         not null
#  updated_at     :datetime         not null
#  contributor_id :integer
#

class Track < ApplicationRecord
  validates :title, :album_id, :artist_id, :ord, presence: true

  has_one_attached :audio   

  belongs_to :artist

  belongs_to :album  

  has_many :playlist_tracks

  has_many :playlists, 
    through: :playlist_tracks, 
    source: :playlist
end
