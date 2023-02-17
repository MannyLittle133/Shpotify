# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)

ApplicationRecord.transaction do
    puts "Destroying tables..."
    # Unnecessary if using `rails db:seed:replant`
    User.destroy_all
    Artist.destroy_all
    Album.destroy_all
    Song.destroy_all
    Playlist.destroy_all
    PlaylistSong.destroy_all
    
    puts "Resetting primary keys..."
    # For easy testing, so that after seeding, the first `User` has `id` of 1
    ApplicationRecord.connection.reset_pk_sequence!("users")
    ApplicationRecord.connection.reset_pk_sequence!("artists")
    ApplicationRecord.connection.reset_pk_sequence!("playlists")
    ApplicationRecord.connection.reset_pk_sequence!("playlist_songs")
    ApplicationRecord.connection.reset_pk_sequence!("songs")
    ApplicationRecord.connection.reset_pk_sequence!("albums")
    
    # # Create one user with an easy to remember username, email, and password:
    User.create!(
          username: 'Demo-lition',
          email: 'demo@user.io',
          password: 'password'
      )
    #   ARTISTS
  
    Artist.create!(name: "G Herbo", artist_photo_url: "https://townsquare.media/site/812/files/2021/09/attachment-g-herbo.jpg")
    Artist.create!(name: "Manny LiTT", artist_photo_url: "https://i1.sndcdn.com/avatars-000613569822-jc8alq-t500x500.jpg")
    Artist.create!(name: "Prince", artist_photo_url: "https://www.history.com/.image/ar_16:9%2Cc_fill%2Ccs_srgb%2Cfl_progressive%2Cg_faces:center%2Cq_auto:good%2Cw_768/MTYzMTA4MjMyMTk2MjY5ODQx/prince-gettyimages-74290175.jpg")
    Artist.create!(name: "Michael Jackson", artist_photo_url: "https://lh3.googleusercontent.com/x-Z35q6HsBB98J85-4oNqPnOen4pZBaNCpHawzf_ejs-pkgh6Eh3D2Fu7S1T4gEj0yWZ0c6DOAHCpA=w1108-h461-p-l90-rj")
    Artist.create!(name: "Queen", artist_photo_url: "https://media.pitchfork.com/photos/634831ba8ddca99732410639/2:1/w_3600,h_1800,c_limit/Queen.jpg")
    Artist.create!(name: "Lil Baby", artist_photo_url: "https://image-cdn.hypb.st/https%3A%2F%2Fhypebeast.com%2Fimage%2F2022%2F10%2FListen-to-Lil-Babys-New-Freestyle-With-Funk-Flex-0.jpg?fit=max&cbr=1&q=90&w=750&h=500")
    Artist.create!(name: "Rick Astley", artist_photo_url: "https://www.giantfreakinrobot.com/wp-content/uploads/2022/08/rick-astley.jpg")
    Artist.create!(name: "Drake", artist_photo_url: "https://www.rollingstone.com/wp-content/uploads/2021/09/drake-clb-review.jpg?w=1600&h=900&crop=1")
    Artist.create!(name: "Pooh Shiesty", artist_photo_url: "https://www.gannett-cdn.com/media/2021/08/19/USATODAY/usatsports/247WallSt.com-247WS-931106-Pooh-Shiesty.jpg")
    Artist.create!(name: "YoungBoy Never Broke Again", artist_photo_url: "https://image-cdn.hypb.st/https%3A%2F%2Fhypebeast.com%2Fimage%2F2022%2F01%2Fnba-youngboy-reportedly-taking-six-month-break-hiatus-tw.jpg?w=960&cbr=1&q=90&fit=max")


  #   ALBUMS 
    Album.create!(title: "Survivor's Remorse", artist_id: 1 , album_photo_url: "https://images.complex.com/complex/images/c_fill,dpr_auto,f_auto,q_auto,w_1400/fl_lossy,pg_1/frcxewqyfy4ma6yhan8e/herbo-survivors-remorse?fimg-ssr-default")
    Album.create!(title: "Almost Famous", artist_id: 2 , album_photo_url: "https://i.scdn.co/image/ab67616d0000b2733355fddbdcd8b3c1b3796635")
    Album.create!(title: "Purple Rain", artist_id: 3 , album_photo_url: "https://americansongwriter.com/wp-content/uploads/2022/08/upersgs13wfxznygpyyd-copy.jpg?resize=1024,1024")
    Album.create!(title: "Thriller", artist_id: 4 , album_photo_url: "https://upload.wikimedia.org/wikipedia/en/5/55/Michael_Jackson_-_Thriller.png")
    Album.create!(title: "A Night at the Opera", artist_id: 5 , album_photo_url: "https://upload.wikimedia.org/wikipedia/en/4/4d/Queen_A_Night_At_The_Opera.png")
    Album.create!(title: "Drip Harder", artist_id: 6 , album_photo_url: "https://upload.wikimedia.org/wikipedia/en/thumb/8/89/Drip_Too_Hard.jpg/220px-Drip_Too_Hard.jpg")
    Album.create!(title: "Whenever You Need Somebody", artist_id: 7 , album_photo_url: "https://upload.wikimedia.org/wikipedia/en/thumb/3/34/RickAstleyNeverGonnaGiveYouUp7InchSingleCover.jpg/220px-RickAstleyNeverGonnaGiveYouUp7InchSingleCover.jpg")
    Album.create!(title: "Her Loss", artist_id: 8 , album_photo_url: "https://images.complex.com/complex/images/c_fill,dpr_auto,f_auto,q_auto,w_1400/fl_lossy,pg_1/rrgyzeu7ucbf5styxkuw/drake-21-savage-her-loss-album-cver?fimg-ssr-default")
    Album.create!(title: "Shiesty Season", artist_id: 9 , album_photo_url: "https://i.scdn.co/image/ab67616d0000b2738da9c99abe05fe9229d1ffa9")
    Album.create!(title: "Still Flexin, Still Steppin", artist_id: 10 , album_photo_url: "https://upload.wikimedia.org/wikipedia/en/a/aa/YoungBoy_Never_Broke_Again_-_Still_Flexin%2C_Still_Steppin.png")


  # SONGS
    Song.create!(title: "After That", artist_name: "G Herbo", album_photo_url: "https://images.complex.com/complex/images/c_fill,dpr_auto,f_auto,q_auto,w_1400/fl_lossy,pg_1/frcxewqyfy4ma6yhan8e/herbo-survivors-remorse?fimg-ssr-default", created_at: Time.now, updated_at: Time.now, song_url:"https://shpotify-seeds.s3.amazonaws.com/Y2Mate.is+-+After+That-elZWv8YWa_s-160k-1660174887041.mp3", album_id: 1)
    Song.create!(title: "Drip Too Cold", artist_name: "Manny LiTT", album_photo_url: "https://i.scdn.co/image/ab67616d0000b2733355fddbdcd8b3c1b3796635", song_url:"https://shpotify-seeds.s3.amazonaws.com/Y2Mate.is+-+Manny+Litt+-+Drip+Too+Cold+OFFICIAL+VERSION-v9tTD1ZRIGQ-160k-1655938431224.mp3", created_at: Time.now, updated_at: Time.now, album_id: 2)
    Song.create!(title: "Purple Rain", artist_name: "Prince", album_photo_url: "https://americansongwriter.com/wp-content/uploads/2022/08/upersgs13wfxznygpyyd-copy.jpg?resize=1024,1024", song_url:"https://shpotify-seeds.s3.amazonaws.com/Y2Mate.is+-+Purple+Rain-S6Y1gohk5-A-160k-1657338289946.mp3", created_at: Time.now, updated_at: Time.now, album_id: 3)
    Song.create!(title: "Billie Jean", artist_name: "Michael Jackson", album_photo_url: "https://upload.wikimedia.org/wikipedia/en/5/55/Michael_Jackson_-_Thriller.png", song_url:"https://shpotify-seeds.s3.amazonaws.com/Y2Mate.is+-+Michael+Jackson+-+Billie+Jean+(Official+Audio)-OZGtRvYF-A4-160k-1655938150166.mp3", created_at: Time.now, updated_at: Time.now, album_id: 4)
    Song.create!(title: "Bohemian Rhapsody", artist_name: "Queen", album_photo_url: "https://upload.wikimedia.org/wikipedia/en/4/4d/Queen_A_Night_At_The_Opera.png", song_url:"https://shpotify-seeds.s3.amazonaws.com/Y2Mate.is+-+Bohemian+Rhapsody-_nxrYwT0SIo-160k-1656495148477.mp3", created_at: Time.now, updated_at: Time.now, album_id: 5)
    Song.create!(title: "Drip Too hard", artist_name: "Lil Baby", album_photo_url: "https://upload.wikimedia.org/wikipedia/en/thumb/8/89/Drip_Too_Hard.jpg/220px-Drip_Too_Hard.jpg", song_url:"https://shpotify-seeds.s3.amazonaws.com/Y2Mate.is+-+Lil+Baby+x+Gunna+-+Drip+Too+Hard+(Official+Audio)-THcVOf1kNh0-160k-1657345138093.mp3", created_at: Time.now, updated_at: Time.now, album_id: 6)
    Song.create!(title: "Never Gonna Give You Up", artist_name: "Rick Astley", album_photo_url: "https://upload.wikimedia.org/wikipedia/en/thumb/3/34/RickAstleyNeverGonnaGiveYouUp7InchSingleCover.jpg/220px-RickAstleyNeverGonnaGiveYouUp7InchSingleCover.jpg", song_url:"https://shpotify-seeds.s3.amazonaws.com/Y2Mate.is+-+Rick+Astley+-+Never+Gonna+Give+You+Up+(Official+Music+Video)-dQw4w9WgXcQ-160k-1654447075402.mp3", created_at: Time.now, updated_at: Time.now, album_id: 7)
    Song.create!(title: "Rich Flex", artist_name: "Drake", album_photo_url: "https://images.complex.com/complex/images/c_fill,dpr_auto,f_auto,q_auto,w_1400/fl_lossy,pg_1/rrgyzeu7ucbf5styxkuw/drake-21-savage-her-loss-album-cver?fimg-ssr-default", song_url:"https://shpotify-seeds.s3.amazonaws.com/Y2Mate.is+-+Drake%2C+21+Savage+-+Rich+Flex+(Audio)-I4DjHHVHWAE-160k-1657321194408.mp3", created_at: Time.now, updated_at: Time.now, album_id: 8)
    Song.create!(title: "Back In Blood", artist_name: "Pooh Shiesty", album_photo_url: "https://i.scdn.co/image/ab67616d0000b2738da9c99abe05fe9229d1ffa9", song_url:"https://shpotify-seeds.s3.amazonaws.com/Y2Mate.is+-+Pooh+Shiesty+-+Back+In+Blood+(feat.+Lil+Durk)+%5BOfficial+Audio%5D-RnGLMCOFjFQ-160k-1656908644326.mp3", created_at: Time.now, updated_at: Time.now, album_id: 9)
    Song.create!(title: "Red Eye", artist_name: "YoungBoy Never Broke Again", album_photo_url: "https://upload.wikimedia.org/wikipedia/en/a/aa/YoungBoy_Never_Broke_Again_-_Still_Flexin%2C_Still_Steppin.png", song_url:"https://shpotify-seeds.s3.amazonaws.com/Y2Mate.is+-+YoungBoy+Never+Broke+Again+-+Red+Eye+%5BOfficial+Audio%5D-xeA7sqs0yi0-160k-1656495581625.mp3", created_at: Time.now, updated_at: Time.now, album_id: 10)
    # 
# PLAYLISTS

    Playlist.create!(title: "My Playlist", creator_id: 1, created_at: Time.now, updated_at: Time.now)

#   PLAYLISTSONGS

    PlaylistSong.create!(playlist_id: 1, song_id: 1)
    

    # Album.create!(title: "Drip Harder", artist: "Lil Baby", album_photo_url: "https://upload.wikimedia.org/wikipedia/en/thumb/8/89/Drip_Too_Hard.jpg/220px-Drip_Too_Hard.jpg", created_at: Time.now, updated_at: Time.now)


  #     ApplicationRecord.transaction do
  #   puts "Destroying tables..."

  #   # Unnecessary if using `rails db:seed:replant`
  #   Stories.destroy_all
  #   ApplicationRecord.connection.reset_pk_sequence!("songs")

  #  puts "DONE!"
  # end
  # puts "Creating users..."

  # song = Song.create!(
  #     title: "hello",``
  #     artist_id: user.id,
  #     album_name: "bad meets evil"
  # )

  # More users
  10.times do
      User.create!({
          username: Faker::Internet.unique.username(specifier: 3),
          email: Faker::Internet.unique.email,
          password: 'password'
      })
  end

  puts "Done!"
end
