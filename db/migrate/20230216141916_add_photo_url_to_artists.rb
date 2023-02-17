class AddPhotoUrlToArtists < ActiveRecord::Migration[7.0]
  def change
    add_column :artists, :artist_photo_url, :string
  end
end
