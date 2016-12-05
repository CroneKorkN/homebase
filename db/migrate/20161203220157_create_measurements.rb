class CreateMeasurements < ActiveRecord::Migration[5.0]
  def change
    create_table :measurements do |t|
      t.references :sensor, foreign_key: true
      t.datetime :date
      t.float :value

      t.timestamps
    end
    add_index :measurements, :date
  end
end
