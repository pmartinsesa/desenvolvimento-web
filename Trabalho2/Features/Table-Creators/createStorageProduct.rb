require 'rubygems' 
require 'active_record' 
 
ActiveRecord::Base.establish_connection :adapter => "sqlite3", 
     :database => "../../Database/StorageTable.db" 
 
ActiveRecord::Base.connection.create_table :storages_products, id: false do |t|  
  t.references :storage
  t.references :product
end