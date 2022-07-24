require 'rubygems'
require 'active_record'

ActiveRecord::Base.establish_connection :adapter => "sqlite3",
                                        :database => "../../Database/StorageTable.db" 
  
ActiveRecord::Base.connection.create_table :storages do |t|  
    t.string    :document
    t.string    :name
end