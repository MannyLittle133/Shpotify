# == Schema Information
#
# Table name: songs
#
#  id              :bigint           not null, primary key
#  title           :string           not null
#  album           :string           not null
#  artist          :string           not null
#  album_photo_url :string
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#
class Song < ApplicationRecord
    validates :title, :album, :artist, :album_photo_url, presence: true






end
