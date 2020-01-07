var degreesCelsius = +prompt("Введите температуру в градусах Цельсия")

function celsiusToFahrenheit() {
  return (degreesCelsius * 1.8) + 32
}
alert(celsiusToFahrenheit())


var degreesFahrenheit = +prompt("Введите температуру в Фаренгейтах")
function fahrenheitToCelsius() {
	return (degreesFahrenheit - 32) * 5/9
}
alert(fahrenheitToCelsius())