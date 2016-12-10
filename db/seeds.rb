sensor = Sensor.create(
  identifier: "sdglajalfh309ur2pf",
  name: "Hauptstrom",
  type: :watts
)

value = 1000
100.times do |i|
  value = previoues_value + (rand(20) - 10) ** 2
  sensor.measurements.create(
    date: DateTime.now - 100.minutes + i.minutes,
    value
  )
  previoues_value = value
end
