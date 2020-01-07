var sum = 0
var n = +(prompt("Введите число"))
var i = 1
for (i; i <= n; i++) {
  if (i % 2 == 1) sum += i
}
console.log(sum)