class Api::SongsController < ApplicationController
    
    def index
        @songs = Song.all

        render :index
    end


    # Implement show, create, update, and destroy methods
    def show

    end
end
