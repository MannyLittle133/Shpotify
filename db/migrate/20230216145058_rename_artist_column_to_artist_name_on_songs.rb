class RenameArtistColumnToArtistNameOnSongs < ActiveRecord::Migration[7.0]
  def change
    rename_column :songs, :artist, :artist_name
  end
end
