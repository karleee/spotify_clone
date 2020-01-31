class RenameTypeforPlaylists < ActiveRecord::Migration[5.2]
  def change
    rename_column :playlists, :type, :playlist_type
  end
end
