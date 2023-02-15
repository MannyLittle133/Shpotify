class ChangeSongUrlToNotAllowNullOnSongs < ActiveRecord::Migration[7.0]
  def change
    change_column :songs, :song_url, :string
  end
end
