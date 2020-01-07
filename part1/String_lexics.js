var inputText = prompt("Please,enter your text here")
if (inputText.includes('fuck')) {
  var newText = inputText.replace('fuck', 'flower')
  alert(newText)
} else alert(inputText)