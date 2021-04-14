class Dropwatch < ActiveRecord::Migration[5.2]
  def change
    drop_table :watched_coins
  end
end
