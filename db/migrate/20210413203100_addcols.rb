class Addcols < ActiveRecord::Migration[5.2]
  def change
    add_column :users, :user_id, :integer
    add_column :tracked_coins, :tracked_coin_id, :integer
  end
end
