# == Schema Information
#
# Table name: albums
#
#  id              :bigint           not null, primary key
#  title           :string           not null
#  artist_id       :bigint
#  album_photo_url :string
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#
class Album < ApplicationRecord
    validates :title, :artist_id, presence: true

    belongs_to :artist,
        primary_key: :id,
        foreign_key: :artist_id,
        class_name: :Artist

    has_many :songs,
        primary_key: :id,
        foreign_key: :album_id,
        class_name: :Song,
        dependent: :destroy


    def self.search(search)
        if search
            Album.where("title ILIKE ?", "%#{search}%")
        else
            Album.all
        end
    end

    def self.search_by_artist(search)
        if search
            Album.where("artist ILIKE ?", "%#{search}%")
        else
            Album.all
        end
    end

    def self.search_by_album(search)
        if search
            Album.where("album ILIKE ?", "%#{search}%")
        else
            Album.all
        end
    end
end
