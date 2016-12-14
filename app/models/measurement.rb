class Measurement < ApplicationRecord
  belongs_to :sensor
  #default_scope ->() {
    #order(:date).where("value < ?", 5000.0)
  #}
  scope :hour, ->(date=DateTime.now) {
    select(:date, :value).where("date < ?", date).where("date > ?", date - 1.hour)
  }
end
