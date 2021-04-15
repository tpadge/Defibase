class Change < ActiveRecord::Migration[5.2]
  def change
    add_column :watched_coins, :name, :string
  end
end
