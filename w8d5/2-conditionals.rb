# == != && ||

value_a = 5
value_b = 10
value_c = 10

# if

if value_a == value_b
  puts "They're the same!"
elsif value_a == value_b
  puts 'Actually whattttt...'
else
  puts "They're not the same!"
end

is_an_admin = false

# unless
puts 'GET OUT OF HERE YOU DUM DUM!' unless is_an_admin
puts 'HELLO ADMIN!' if is_an_admin

some_array = [1, 2, 3, 4, 5, 6]
puts some_array unless some_array.empty?

# <
puts value_a > value_b
puts value_a < value_b
puts value_a == value_b
puts value_a != value_b

# 5
# 10
puts value_a <=> value_b
puts value_b <=> value_a
puts value_a <=> value_a

if (value_a <=> value_b) == 0
  puts "They're the same!"
elsif (value_a <=> value_b) == -1
  puts 'The first value is smaller than the second one'
else
  puts 'The first value is bigger than the second one'
end

# >
# ==
# <=>
