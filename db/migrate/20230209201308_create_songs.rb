class CreateSongs < ActiveRecord::Migration[7.0]
  def change
    create_table :songs do |t|
      t.string :title, null: false
      t.string :album, null: false
      t.string :artist, null: false
      t.string :album_photo_url
      t.timestamps
    end
  end
end
