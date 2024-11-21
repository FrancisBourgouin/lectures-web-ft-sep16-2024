# This file should ensure the existence of records required to run the application in every environment (production,
# development, test). The code here should be idempotent so that it can be executed at any point in every environment.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Example:
#
#   ["Action", "Comedy", "Drama", "Horror"].each do |genre_name|
#     MovieGenre.find_or_create_by!(name: genre_name)
#   end


author1 = Author.create(name: "Bob", email: "bob@bob.com")
author2 = Author.create(name: "Pequeno Pollo", email: "pot@to.com")

author1.posts.create(title: "Post #1", content: "OMG IT'S A POST")
author1.posts.create(title: "Post #2", content: "OMG IT'S A POST")
author1.posts.create(title: "Post #3", content: "OMG IT'S A POST")

author2.posts.create(title: "Post #1", content: "OMG IT'S A POST")
author2.posts.create(title: "Post #2", content: "OMG IT'S A POST")
author2.posts.create(title: "Post #3", content: "OMG IT'S A POST")
