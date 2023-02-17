# == Schema Information
#
# Table name: songs
#
#  id              :bigint           not null, primary key
#  title           :string           not null
#  artist_name     :string           not null
#  album_photo_url :string
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#  song_url        :string
#  album_id        :integer
#
class Song < ApplicationRecord
    validates :title, :artist_name, :album_photo_url, :song_url,  presence: true

    
    belongs_to :album,  
        foreign_key: :album_id,
        class_name: :Album
        
    has_many :playlists,
        through: :playlist_songs,
        source: :playlist

    has_many :playlist_songs,
        foreign_key: :song_id,
        class_name: :PlaylistSong

    has_one :artist,
        through: :album,
        source: :artist




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
