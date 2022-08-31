class Employee < ApplicationRecord
  belongs_to :storage
  has_one    :contract, :dependent => :destroy
end
