class CreateWatchedCoins < ActiveRecord::Migration[5.2]
  def change
    create_table :watched_coins do |t|
        
      t.timestamps
    end
  end
end
