class Project < ActiveRecord::Base
  has_many :tickets
  belongs_to :user

  # #Counts how many tickets are in each project
  # def self.count_tickets(id)
  #   self.find(id).tickets.length
  # end

end