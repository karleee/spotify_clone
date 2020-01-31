class AddTimestampsToTracks < ActiveRecord::Migration[5.2]
  def change
    add_timestamps :tracks, null: false
  end
end
