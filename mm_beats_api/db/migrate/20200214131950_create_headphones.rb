class CreateHeadphones < ActiveRecord::Migration[6.0]
  def change
    create_table :headphones do |t|
      t.string :model
      t.string :manufacturer
      t.string :body_type
      t.string :driver_type
      t.string :release_year
      t.integer :star_rating
      t.string :price

      t.timestamps
    end
  end
end
