class CreateHoldings < ActiveRecord::Migration[5.2]
  def change
    create_table :holdings do |t|
      t.string :name
      t.integer :quantity
      t.integer :user_id 
      t.timestamps
    end
  end
end
