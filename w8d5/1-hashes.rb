# Hashes
# =>, [], :symbol

some_potato = {
  name: 'Yukon Gold',
  type: 'Good potato',
  size: 'medium'
}

some_other_potato = {
  :name => 'Irish Cobbler',
  :type => 'Fancy potato',
  :size => 'small'
}

p some_other_potato
p some_potato

p some_other_potato[:name]
some_other_potato[:name] = "Fingerling"
p some_other_potato[:name]

p :name

# Logic Board / Motherboard

# HashMaps
