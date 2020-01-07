var hours;
do {
  hours = prompt("Введите количество часов");
} while (isNaN(hours));
var seconds = hours * 3600
alert("В " + hours + " часах " + seconds + " секунд")