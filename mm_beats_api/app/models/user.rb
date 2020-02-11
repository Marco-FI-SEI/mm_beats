class User < ApplicationRecord
  has_secure_password

  validates_presence_of :email, :location, :username, :first_name, :last_name
  validates_uniqueness_of :email
end
