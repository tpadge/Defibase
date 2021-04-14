class ChangeCoina < ActiveRecord::Migration[5.2]
  def change
    rename_table :tracked_coinas, :tracked_coins
  end
end
