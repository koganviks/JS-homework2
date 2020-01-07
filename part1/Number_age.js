var age = prompt("How old are you?")
var data = new Date;
var thisYear = data.getFullYear()
var yearOfBirth = thisYear - age;
console.log(yearOfBirth)