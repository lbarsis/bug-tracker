puts "🌱 Seeding spices..."

# Seed your database here

5.times do 
  User.create(
    first_name: Faker::Name.first_name,
    last_name: Faker::Name.last_name,
    phone: Faker::PhoneNumber.cell_phone,
    email: Faker::Internet.email,
    profile_image: Faker::Avatar.image
  )
end

10.times do 
  Project.create(
    name: Faker::App.name,
    description: Faker::Movie.quote,
    status: Faker::Subscription.status
  )

  rand(1..5).times do
    Ticket.create(
      title: Faker::Hipster.word,
      priority: rand(1..3),
      description: Faker::Hipster.sentence,
      status: Faker::Subscription.status,
      hours: rand(1..10),
      user_id: rand(User.all.first.id..User.all.last.id),
      project_id:rand(Project.all.first.id..Project.all.last.id)
    )
  end
end


puts "✅ Done seeding!"
