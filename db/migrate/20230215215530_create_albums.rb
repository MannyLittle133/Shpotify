class CreateAlbums < ActiveRecord::Migration[7.0]
  def change
    create_table :albums do |t|
      t.string :title, null: false
      t.references :artist, foreign_key: true
      t.string :album_photo_url
      t.timestamps
    end

  end
end
