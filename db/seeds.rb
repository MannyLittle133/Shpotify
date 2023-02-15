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

  puts "Resetting primary keys..."
  # For easy testing, so that after seeding, the first `User` has `id` of 1
  ApplicationRecord.connection.reset_pk_sequence!("songs")
  ApplicationRecord.connection.reset_pk_sequence!("users")
  ApplicationRecord.connection.reset_pk_sequence!("artists")
  ApplicationRecord.connection.reset_pk_sequence!("albums")
  ApplicationRecord.connection.reset_pk_sequence!("playlists")
  ApplicationRecord.connection.reset_pk_sequence!("playlist_songs")
  Song.create!(title: "Purple Rain", album: "Purple Rain", artist: "Prince", album_photo_url: "https://americansongwriter.com/wp-content/uploads/2022/08/upersgs13wfxznygpyyd-copy.jpg?resize=1024,1024", song_url:"https://shpotify-seeds.s3.amazonaws.com/Y2Mate.is+-+Purple+Rain-S6Y1gohk5-A-160k-1657338289946.mp3", album_id: "1", created_at: Time.now, updated_at: Time.now)
  Song.create!(title: "Billie Jean", album: "Thriller", artist: "Michael Jackson", album_photo_url: "https://upload.wikimedia.org/wikipedia/en/5/55/Michael_Jackson_-_Thriller.png", song_url:"https://shpotify-seeds.s3.amazonaws.com/Y2Mate.is+-+Michael+Jackson+-+Billie+Jean+(Official+Audio)-OZGtRvYF-A4-160k-1655938150166.mp3",album_id: "1", created_at: Time.now, updated_at: Time.now)
  Song.create!(title: "Bohemian Rhapsody", album: "A Night at the Opera", artist: "Queen", album_photo_url: "https://upload.wikimedia.org/wikipedia/en/4/4d/Queen_A_Night_At_The_Opera.png", song_url:"https://shpotify-seeds.s3.amazonaws.com/Y2Mate.is+-+Bohemian+Rhapsody-_nxrYwT0SIo-160k-1656495148477.mp3",album_id: "1", created_at: Time.now, updated_at: Time.now)
  Song.create!(title: "Drip Too hard", album: "Drip Harder", artist: "Lil Baby", album_photo_url: "https://upload.wikimedia.org/wikipedia/en/thumb/8/89/Drip_Too_Hard.jpg/220px-Drip_Too_Hard.jpg", song_url:"https://shpotify-seeds.s3.amazonaws.com/Y2Mate.is+-+Lil+Baby+x+Gunna+-+Drip+Too+Hard+(Official+Audio)-THcVOf1kNh0-160k-1657345138093.mp3", album_id: "1", created_at: Time.now, updated_at: Time.now)
  Song.create!(title: "Never Gonna Give You Up", album: "Whenever You Need Somebody", artist: "Rick Astley", album_photo_url: "https://upload.wikimedia.org/wikipedia/en/thumb/3/34/RickAstleyNeverGonnaGiveYouUp7InchSingleCover.jpg/220px-RickAstleyNeverGonnaGiveYouUp7InchSingleCover.jpg", song_url:"https://shpotify-seeds.s3.amazonaws.com/Y2Mate.is+-+Rick+Astley+-+Never+Gonna+Give+You+Up+(Official+Music+Video)-dQw4w9WgXcQ-160k-1654447075402.mp3",album_id: "1", created_at: Time.now, updated_at: Time.now)
  Song.create!(title: "Rich Flex", album: "Her Loss", artist: "Drake", album_photo_url: "https://images.complex.com/complex/images/c_fill,dpr_auto,f_auto,q_auto,w_1400/fl_lossy,pg_1/rrgyzeu7ucbf5styxkuw/drake-21-savage-her-loss-album-cver?fimg-ssr-default", song_url:"https://shpotify-seeds.s3.amazonaws.com/Y2Mate.is+-+Drake%2C+21+Savage+-+Rich+Flex+(Audio)-I4DjHHVHWAE-160k-1657321194408.mp3",album_id: "1", created_at: Time.now, updated_at: Time.now)
  Song.create!(title: "Back In Blood", album: "Shiesty Season", artist: "Pooh Shiesty", album_photo_url: "https://i.scdn.co/image/ab67616d0000b2738da9c99abe05fe9229d1ffa9", song_url:"https://shpotify-seeds.s3.amazonaws.com/Y2Mate.is+-+Pooh+Shiesty+-+Back+In+Blood+(feat.+Lil+Durk)+%5BOfficial+Audio%5D-RnGLMCOFjFQ-160k-1656908644326.mp3", album_id: "1", created_at: Time.now, updated_at: Time.now)
  Song.create!(title: "Drip Too Cold", album: "Almost Famous", artist: "Manny LiTT", album_photo_url: "https://i.scdn.co/image/ab67616d0000b2733355fddbdcd8b3c1b3796635", song_url:"https://shpotify-seeds.s3.amazonaws.com/Y2Mate.is+-+Manny+Litt+-+Drip+Too+Cold+OFFICIAL+VERSION-v9tTD1ZRIGQ-160k-1655938431224.mp3", album_id: "1", created_at: Time.now, updated_at: Time.now)
  Song.create!(title: "After That", album: "Survivor's Remorse", artist: "G Herbo", album_photo_url: "https://images.complex.com/complex/images/c_fill,dpr_auto,f_auto,q_auto,w_1400/fl_lossy,pg_1/frcxewqyfy4ma6yhan8e/herbo-survivors-remorse?fimg-ssr-default", song_url:"https://shpotify-seeds.s3.amazonaws.com/Y2Mate.is+-+After+That-elZWv8YWa_s-160k-1660174887041.mp3", album_id: "1", created_at: Time.now, updated_at: Time.now)
  Song.create!(title: "Red Eye", album: "Still Flexin, Still Steppin", artist: "YoungBoy Never Broke Again", album_photo_url: "https://upload.wikimedia.org/wikipedia/en/a/aa/YoungBoy_Never_Broke_Again_-_Still_Flexin%2C_Still_Steppin.png", song_url:"https://shpotify-seeds.s3.amazonaws.com/Y2Mate.is+-+YoungBoy+Never+Broke+Again+-+Red+Eye+%5BOfficial+Audio%5D-xeA7sqs0yi0-160k-1656495581625.mp3", album_id: "1", created_at: Time.now, updated_at: Time.now)
  


  #     ApplicationRecord.transaction do
  #   puts "Destroying tables..."

  #   # Unnecessary if using `rails db:seed:replant`
  #   Stories.destroy_all
  #   ApplicationRecord.connection.reset_pk_sequence!("songs")

  #  puts "DONE!"
  # end
  # puts "Creating users..."
  # # Create one user with an easy to remember username, email, and password:
#   User.create!(
#         username: 'Demo-lition',
#         email: 'demo@user.io',
#         password: 'password'
#     )

  # song = Song.create!(
  #     title: "hello",
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
