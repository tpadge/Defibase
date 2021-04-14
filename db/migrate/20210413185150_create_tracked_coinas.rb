class CreateTrackedCoinas < ActiveRecord::Migration[5.2]
  def change
    create_table :tracked_coinas do |t|
        t.string :name, null: false
      t.timestamps
    end
  end
end
