# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)


Contact.delete_all


Contact.create!([
  {id: 1, name: "Bob Smith", email: "bob@gmail.com", message: "you guys rock!"},
  {id: 2, name: "Harriet Jones", email: "harriet@ga.com", message: "love your biscuits"},
  {id: 3, name: "Dana Carvme", email: "dana@yahoo.com", message: "be my personal chef"},
])
