class CreateCoins < ActiveRecord::Migration[5.2]
  def change
    create_table :coins do |t|
      t.string :name, null: false
      t.string :symbol, null: false

      t.timestamps
    end
    add_index :coins, :name, unique: true
    add_index :coins, :symbol, unique: true
  end
end
