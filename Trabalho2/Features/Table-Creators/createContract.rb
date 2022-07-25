require 'rubygems'
require 'active_record'

ActiveRecord::Base.establish_connection :adapter => "sqlite3",
                                        :database => "./Database/StorageTable.db" 
  
ActiveRecord::Base.connection.create_table :contracts do |t|  
    t.string     :contractId
    t.references :employee, foreign_key: true
end