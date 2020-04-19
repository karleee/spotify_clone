# == Schema Information
#
# Table name: artist_playlists
#
#  id         :bigint           not null, primary key
#  title      :string           not null
#  artist_id  :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class ArtistPlaylist < ApplicationRecord
  validates :title, :artist_id, presence: true

  has_one_attached :photo

  belongs_to :artist

  has_many :tracks,
    through: :artist,
    source: :tracks
end
