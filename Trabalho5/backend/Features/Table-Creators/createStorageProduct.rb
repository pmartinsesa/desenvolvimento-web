require 'rubygems' 
require 'active_record' 
 
ActiveRecord::Base.establish_connection :adapter => "sqlite3", 
     :database => "./Database/StorageTable.db" 
 
ActiveRecord::Base.connection.create_table :products_storages, id: false do |t|  
  t.references :storage,  :unique => true
  t.references :product,  :unique => true
end