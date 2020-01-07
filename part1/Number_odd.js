var inputValue = +prompt("Пожалуйста, введите число")
if (isNaN(inputValue)) {
  alert("И это по-твоему число, дурында?")
} else if (inputValue % 2 == 0) {
  alert("Число четное")
} else alert("Число нечетное")