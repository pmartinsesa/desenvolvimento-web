require 'active_record'

ActiveRecord::Base.establish_connection :adapter => "sqlite3",
                                        :database => "../Database/StorageTable.db" 

class ContractView < ActiveRecord::Base; 
    belongs_to :storage
    has_one    :employee
end