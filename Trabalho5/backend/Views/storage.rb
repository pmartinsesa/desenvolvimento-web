require 'active_record'

ActiveRecord::Base.establish_connection :adapter => "sqlite3",
                                        :database => "./Database/StorageTable.db"

class Storage < ActiveRecord::Base;
    has_many :employees, :dependent => :destroy
    has_and_belongs_to_many :products, -> { distinct }
end