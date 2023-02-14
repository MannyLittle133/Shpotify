# == Schema Information
#
# Table name: artists
#
#  id         :bigint           not null, primary key
#  name       :string           not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#
class Artist < ApplicationRecord
    validates :name, presence: true

    has_many :albums,
        primary_key: :id,
        foreign_key: :artist_id,
        class_name: :Album,
        dependent: :destroy

    has_many :songs,
        primary_key: :id,
        foreign_key: :artist_id,
        class_name: :Song,
        dependent: :destroy

    def self.search(search)
        if search
            Artist.where("name ILIKE ?", "%#{search}%")
        else
            Artist.all
        end
    end

    def self.search_by_name(search)
        if search
            Artist.where("name ILIKE ?", "%#{search}%")
        else
            Artist.all
        end
    end

    def self.search_by_album(search)
        if search
            Artist.where("album ILIKE ?", "%#{search}%")
        else
            Artist.all
        end
    end

    def self.search_by_title(search)
        if search
            Artist.where("title ILIKE ?", "%#{search}%")
        else
            Artist.all
        end
    end
end



