class User < ActiveRecord::Base
  has_many :tickets
  has_many :projects, through: :tickets

  def get_completed_tickets
    self.get_completed_tickets = self.tickets.filter{|t| t.status == 'complete'}.length
  end

  def get_in_progress_tickets
    self.get_in_progress_tickets = self.tickets.filter{|t| t.status == 'in-progress'}.length
  end
end