json.extract! measurement, :id, :sensor_id, :date, :value, :created_at, :updated_at
json.url measurement_url(measurement, format: :json)