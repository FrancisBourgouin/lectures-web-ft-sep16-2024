# EVERYTHING IS AN OBJECT
# Numbers

awesomeness_level = 9001

p awesomeness_level.to_s
# puts awesomeness_level.to_s

awesomeness_level = 'Hello my name is bob, and my awesomeness level is 9001'
greeting = "Hello my name is bob, and my awesomeness level is #{awesomeness_level}"

puts greeting

# Strings & ' vs " & #{}

# Puts vs P

# String

# Array

joy = ['hip', 'hip', 1, 'potato', 'wiggle', 5, 6, 7, 23, 1, 4, 5]

# p(joy.sort { |a, b| a <=> b })

p joy.reverse
p joy

p 'shuffle!'
p joy.shuffle!
p joy

p joy.empty?

p joy[0]
p joy[-joy.length]
p joy[-20]

# undefined, null, nil

a = [1, 2, 3, 4, 5, 6]
b = [1, 2, 3, 1]

p a

sleep(1)

p b

sleep(1)

p [1, 2, 3, 1] - [1, 2, 3, 4, 5, 6]
p [1, 2, 3, 4, 5, 6] - [1, 2, 3, 1]