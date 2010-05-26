# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ :name => 'Chicago' }, { :name => 'Copenhagen' }])
#   Mayor.create(:name => 'Daley', :city => cities.first)
                                                              
Test.create([{:title => 'HTML', :info => '<p>this is HTML text'}, {:title => 'JSON', :info => 'this is JSON text'}, 
  {:title => 'XML', :info => 'this is XML text'}, {:title => 'SCRIPT', :info => 'this is Script text'}, {:title => 'TEXT', :info => 'a text record'}])