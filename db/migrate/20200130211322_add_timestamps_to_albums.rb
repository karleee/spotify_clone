class AddTimestampsToAlbums < ActiveRecord::Migration[5.2]
  def change
     add_timestamps :albums, null: false
  end
end
