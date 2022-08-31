class CreateProductsStorages < ActiveRecord::Migration[7.0]
  def change
    create_table :products_storages do |t|
      t.references :storage, null: false, :unique => true
      t.references :product, null: false, :unique => true

      t.timestamps
    end
  end
end
