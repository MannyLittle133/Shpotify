class Api::ArtistsController < ApplicationController
    def index
        @artists = Artist.all
        render :index
    end

    def show
        @artist = Artist.find(params[:id])
        render :show
    end

    def search
        @artists = Artist.search(params[:search])
        render :index
    end
end