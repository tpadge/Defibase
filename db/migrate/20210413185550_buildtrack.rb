class Buildtrack < ActiveRecord::Migration[5.2]
  def change
    add_column :tracked_coins, :name, :string
  end
end
