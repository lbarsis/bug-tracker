class Users < ActiveRecord::Migration[6.1]
  def change
    create_table :users do |t|
      t.string :first_name
      t.string :last_name
      t.string :phone
      t.string :email     
      t.string :profile_image
      t.timestamps
    end
  end
end
