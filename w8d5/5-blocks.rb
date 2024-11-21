# Blocks!

# YIELD
# Picking 5 baskets of raspberries will yield 10 pots of jam

def fancify_output
  puts '✨✨✨✨🐈🐈🐈🐈✨✨✨✨'
  yield
  puts '✨✨✨✨🐈🐈🐈🐈✨✨✨✨'
end

fancify_output { puts 2 + 2 }

some_array = %w[Saif Alexis Bronwen Nhi]

def say_hi_to_everyone(names)
  names.each do |name|
    puts "Hello #{name}!"
  end
end

fancify_output do
  say_hi_to_everyone some_array
end
