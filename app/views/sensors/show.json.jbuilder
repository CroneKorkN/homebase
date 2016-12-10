json.partial! "sensors/sensor", sensor: @sensor, @sensor.measurements.extract!(:date, :value)
