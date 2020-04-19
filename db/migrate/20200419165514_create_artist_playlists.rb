class CreateArtistPlaylists < ActiveRecord::Migration[5.2]
  def change
    create_table :artist_playlists do |t|
      t.string :title, null: false 
      t.integer :artist_id, null: false
      t.timestamps
    end
    add_index :artist_playlists, :artist_id 
  end
end
