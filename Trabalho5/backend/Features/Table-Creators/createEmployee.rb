require 'rubygems'
require 'active_record'

ActiveRecord::Base.establish_connection :adapter => "sqlite3",
                                        :database => "./Database/StorageTable.db" 
  
ActiveRecord::Base.connection.create_table :employees do |t|  
    t.string     :cpf  
    t.string     :name  
    t.references :storage, foreign_key: true
end