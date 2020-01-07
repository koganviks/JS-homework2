var floors = prompt("Введите количество этажей")
var numberOfFlatsOnTheFloor = prompt("Введите количество квартир на этаже")
var flatNumber = prompt("Введите номер квартиры")
var flatsInOneEntrance = numberOfFlatsOnTheFloor * floors // узнаем сколько квартир в подъезде
var numberOfEntrance = Math.ceil(flatNumber/flatsInOneEntrance)// узнаем номер подъезда
var floorNumber = Math.ceil((flatNumber % flatsInOneEntrance) / numberOfFlatsOnTheFloor) //узнаем номер этажа
alert("Нужная квартира находится в "+ numberOfEntrance + " подъезде на " + floorNumber + " этаже!")