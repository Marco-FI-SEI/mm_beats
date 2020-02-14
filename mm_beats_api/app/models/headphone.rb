class Headphone < ApplicationRecord
  validates_presence_of :model, :manufacturer, :body_type, :driver_type, :release_year, :price

validates :model, uniqueness: {scope: :manufacturer}
end
