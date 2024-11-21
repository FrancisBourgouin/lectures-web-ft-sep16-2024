# each

some_array = %w[Saif Alexis Bronwen Nhi]

some_array.each do |name|
  puts "Hello #{name}"
end

# each_with

some_array.each_with_index do |name, index|
  puts "Hello #{name} at position #{index}"
end

# for

for name in some_array
  puts "Hello #{name}"
end

# .times

21.times do |number|
  puts "WAZAAAAAAA #{number + 50}"
end

# .upto

50.upto(70) do |number|
  puts "WAZAAAAAAA #{number}"
end

70.downto(50) do |number|
  puts "WAZAAAAAAA #{number}"
end
