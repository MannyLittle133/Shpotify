class RemoveAlbumFromSongs < ActiveRecord::Migration[7.0]
  def change
    remove_column :songs, :album, :string
  end
end
