class ChangeName < ActiveRecord::Migration[5.2]
  def change
    rename_table :watched_coins, :watch_list
  end
end
