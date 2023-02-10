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
  # User.destroy_all

  puts "Resetting primary keys..."
  # For easy testing, so that after seeding, the first `User` has `id` of 1
  ApplicationRecord.connection.reset_pk_sequence!("songs")
  Song.create!(title: "Purple Rain", album: "Purple Rain", artist: "Prince", album_photo_url: "https://example.com/purple-rain.jpg", created_at: Time.now, updated_at: Time.now)
  Song.create!(title: "Billie Jean", album: "Thriller", artist: "Michael Jackson", album_photo_url: "https://example.com/thriller.jpg", created_at: Time.now, updated_at: Time.now)
  Song.create!(title: "Bohemian Rhapsody", album: "A Night at the Opera", artist: "Queen", album_photo_url: "https://example.com/night-at-the-opera.jpg", created_at: Time.now, updated_at: Time.now)
  Song.create!(title: "Imagine", album: "Imagine", artist: "John Lennon", album_photo_url: "https://example.com/imagine.jpg", created_at: Time.now, updated_at: Time.now)
  Song.create!(title: "Smells Like Teen Spirit", album: "Nevermind", artist: "Nirvana", album_photo_url: "https://example.com/nevermind.jpg", created_at: Time.now, updated_at: Time.now)

  #     ApplicationRecord.transaction do
  #   puts "Destroying tables..."

  #   # Unnecessary if using `rails db:seed:replant`
  #   Stories.destroy_all
  #   ApplicationRecord.connection.reset_pk_sequence!("songs")

  #  puts "DONE!"
  # end
  # puts "Creating users..."
  # # Create one user with an easy to remember username, email, and password:
  # User.create!(
  #     username: 'Demo-lition',
  #     email: 'demo@user.io',
  #     password: 'password'
  # )

  # song = Song.create!(
  #     title: "hello",
  #     artist_id: user.id,
  #     album_name: "bad meets evil"
  # )

  # # More users
  # 10.times do
  #     User.create!({
  #         username: Faker::Internet.unique.username(specifier: 3),
  #         email: Faker::Internet.unique.email,
  #         password: 'password'
  #     })
  # end

  puts "Done!"
end
