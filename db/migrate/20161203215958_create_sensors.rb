class CreateSensors < ActiveRecord::Migration[5.0]
  def change
    create_table :sensors do |t|
      t.string :identifier
      t.string :name
      t.string :unit

      t.timestamps
    end
    add_index :sensors, :identifier
    add_index :sensors, :type
  end
end
