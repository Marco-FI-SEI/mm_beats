class AddUniqueIndexToHeadphones < ActiveRecord::Migration[6.0]
  def change
    add_index :headphones, [:model, :manufacturer], unique: true
  end
end
