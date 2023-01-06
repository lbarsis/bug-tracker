class Tickets < ActiveRecord::Migration[6.1]
  def change
    create_table :tickets do |t|
      t.string :title
      t.string :priority
      t.string :description
      t.string :status
      t.string :type
      t.integer :hours      
      t.timestamps
    end
  end
end
