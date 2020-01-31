# == Schema Information
#
# Table name: playlists
#
#  id            :bigint           not null, primary key
#  title         :string           not null
#  user_id       :integer          not null
#  created_at    :datetime         not null
#  updated_at    :datetime         not null
#  playlist_type :string           not null
#

class Playlist < ApplicationRecord
  validates :title, :user_id, :playlist_type, presence: true

  belongs_to :user
end
