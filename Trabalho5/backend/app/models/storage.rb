class Storage < ApplicationRecord
  has_many :employees, :dependent => :destroy
  has_and_belongs_to_many :products, -> { distinct }
end
