class AddProjectIdAndUserIdToTicket < ActiveRecord::Migration[6.1]
  def change
    add_column :tickets, :user_id, :integer
    add_column :tickets, :project_id, :integer
  end
end
