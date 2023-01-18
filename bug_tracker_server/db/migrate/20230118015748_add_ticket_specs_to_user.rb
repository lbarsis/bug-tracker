class AddTicketSpecsToUser < ActiveRecord::Migration[6.1]
  def change
    add_column :users, :get_completed_tickets, :integer
    add_column :users, :get_in_progress_tickets, :integer
  end
end
