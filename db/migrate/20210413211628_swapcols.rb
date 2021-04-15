class Swapcols < ActiveRecord::Migration[5.2]
  def change
    remove_column :users, :user_id
    remove_column :tracked_coins, :tracked_coin_id
    add_column :tracked_coins, :user_id, :integer, null: false
  end
end
