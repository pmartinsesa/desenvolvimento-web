class CreateEmployees < ActiveRecord::Migration[7.0]
  def change
    create_table :employees do |t|
      t.string :cpf
      t.string :name
      t.references :storage, null: false, foreign_key: true

      t.timestamps
    end
  end
end
