class CreateStorages < ActiveRecord::Migration[7.0]
  def change
    create_table :storages do |t|
      t.string :cnpj
      t.string :name

      t.timestamps
    end
  end
end
