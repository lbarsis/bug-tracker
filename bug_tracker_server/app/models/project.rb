class Project < ActiveRecord::Base
  belongs_to :user
  has_many :tickets

  # #Counts how many tickets are in each project
  # def self.count_tickets(id)
  #   self.find(id).tickets.length
  # end

end