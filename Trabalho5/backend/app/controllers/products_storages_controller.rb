class ProductsStoragesController < ApplicationController
  def index
     sql = "SELECT * from products_storages"
     results = ActiveRecord::Base.connection.execute(sql)
     if results.present?
       @productsOnStorages = results
     end
   end
end