class CreateContracts < ActiveRecord::Migration[7.0]
  def change
    create_table :contracts do |t|
      t.string :contractId
      t.references :employee, null: false, foreign_key: true

      t.timestamps
    end
  end
end
