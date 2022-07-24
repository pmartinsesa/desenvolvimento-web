require 'active_record'

ActiveRecord::Base.establish_connection :adapter => "sqlite3",
                                        :database => "./Database/StorageTable.db"

class Product < ActiveRecord::Base; 
    has_and_belongs_to_many :storage, -> { uniq }, :dependent => :destroy
end