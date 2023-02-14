class Api::SongsController < ApplicationController
    
    def index
        @songs = Song.all

        render :index
    end


    # Implement show, create, update, and destroy methods
    def show
        @song = Song.find(params[:id])
        render :show
    end

    def create
        @song = Song.new(song_params)
        if @song.save
            render :show
        else
            render json: @song.errors.full_messages, status: 422
        end
    end

    def update
        @song = Song.find(params[:id])
        if @song.update(song_params)
            render :show
        else
            render json: @song.errors.full_messages, status: 422
        end
    end

    def destroy
        @song = Song.find(params[:id])
        @song.destroy
        render :show
    end

    private

    def song_params
        params.require(:song).permit(:title, :album, :artist, :album_photo_url, :song_file)
    end
end
