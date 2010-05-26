class Test < ActiveRecord::Base    
  
  validates_length_of :info, :within => 5..40, :message => "must be present"

end
