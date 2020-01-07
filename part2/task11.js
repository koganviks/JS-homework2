var inputData = prompt("Введите значение")
var amountOfTime = parseInt(inputData)

function secondsInHours(amountOfHours) {
  return 60 * 60 * amountOfHours
}

function secondsInDays(amountOfDays) {
  return secondsInHours(24) * amountOfDays
}

function secondsInWeeks(amountOfWeeks) {
  return secondsInDays(7) * amountOfWeeks
}

function secondsInMonth(amountOfMonths) {
  return secondsInDays(30) * amountOfMonths
}
if (inputData.includes("h")) {
  alert("В " + amountOfTime + " часах " + secondsInHours(amountOfTime) + " секунд")
} else if (inputData.includes("d")) {
  alert("В " + amountOfTime + " днях " + secondsInDays(amountOfTime) + " секунд")
} else if (inputData.includes("w")) {
  alert("В " + amountOfTime + " неделях " + secondsInWeeks(amountOfTime) + " секунд")
} else if (inputData.includes("m")) {
  alert("В " + amountOfTime + " месяцах " + secondsInMonth(amountOfTime) + " секунд")
}