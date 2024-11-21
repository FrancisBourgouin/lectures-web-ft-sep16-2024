# What's a class ?

# A group of students
# A blueprint

# User => name, admin_status, greet, farewell

class Potato
  def initialize(name, type, major)
    @name = "Dr. #{name} PHD"
    @type = type
    @major = major
  end

  attr_accessor :name

  def greet
    puts "Well hello there, pleased to meet you, I am #{@name}"
  end

  def currently_studying?
    !@major.empty?
  end
end

yukon = Potato.new('Patator', 'Yukon Gold', 'Sour Cream Analysis')
irish_cobbler = Potato.new('Papa', 'Irish Cobbler', "")

# p yukon.name
# yukon.name = 'Potatovich III'
# p yukon.name

yukon.greet
puts yukon.currently_studying?
puts irish_cobbler.currently_studying?
