class Project < ActiveRecord::Base
  has_many :tickets
  has_many :users, through: :tickets

  # #Counts how many tickets are in each project
  # def self.count_tickets(id)
  #   self.find(id).tickets.length
  # end

end