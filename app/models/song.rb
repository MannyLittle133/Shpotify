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


    has_many :playlist_songs,
        foreign_key: :song_id,
        class_name: :PlaylistSong


    has_many :playlists,
        through: :playlist_songs,
        source: :playlist

    has_one_attached :song_file


    def self.search(search)
        if search
            Song.where("title ILIKE ?", "%#{search}%")
        else
            Song.all
        end
    end

    def self.search_by_artist(search)
        if search
            Song.where("artist ILIKE ?", "%#{search}%")
        else
            Song.all
        end
    end

    def self.search_by_album(search)
        if search
            Song.where("album ILIKE ?", "%#{search}%")
        else
            Song.all
        end
    end

    def self.search_by_title(search)
        if search
            Song.where("title ILIKE ?", "%#{search}%")
        else
            Song.all
        end
    end

    def self.search_by_album_photo_url(search)
        if search
            Song.where("album_photo_url ILIKE ?", "%#{search}%")
        else
            Song.all
        end
    end

    def self.search_by_song_file(search)
        if search
            Song.where("song_file ILIKE ?", "%#{search}%")
        else
            Song.all
        end
    end

    def self.search_by_created_at(search)
        if search
            Song.where("created_at ILIKE ?", "%#{search}%")
        else
            Song.all
        end
    end

    def self.search_by_updated_at(search)
        if search
            Song.where("updated_at ILIKE ?", "%#{search}%")
        else
            Song.all
        end
    end

    def self.search_by_id(search)
        if search
            Song.where("id ILIKE ?", "%#{search}%")
        else
            Song.all
        end
    end

    def self.search_by_playlist_id(search)
        
    end

end
