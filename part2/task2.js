var str = 'abcde'
for (var i = 0; i < str.length; i++) {
  var strSign = str[i]
  if (strSign == "a" || strSign == "b" || strSign == "e")
    console.log(str[i] + " Я знаю эту букву")
}