class Api::AlbumsController < ApplicationController
    def index
        @albums = Album.all
        render :index
    end

    def show
        @album = Album.find(params[:id])
        render :show
    end

    def create
        @album = Album.new(album_params)
        if @album.save
            render :show
        else
            render json: @album.errors.full_messages, status: 422
        end
    end

    def search
        @albums = Album.search(params[:search])
        render :index
    end
end