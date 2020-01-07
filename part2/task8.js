var sum = 0
var str = "Привет, Мир!"
for (i = 0; i < str.length; i++) {
  sum += str.charCodeAt(i)
}
console.log(sum)