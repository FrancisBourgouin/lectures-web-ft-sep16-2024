# Motherboard => Logic Boards
# Not functions => Methods!

# return

some_array = %w[Saif Alexis Bronwen Nhi]

def repeat_word(amount_of_times, word)
  amount_of_times.times do
    puts word
  end
end

repeat_word 10, 'pouet'

def add_two_numbers(num1, num2)
  result = num1 + num2
  puts result
  result
end

result = add_two_numbers 5, 6
p result



# const addTwoNumbers = (a,b) => {
#   const result = a + b
#   console.log(result)
#   return result
# }