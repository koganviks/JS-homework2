var inputSize = +prompt("Введите размер одежды")

function fromRussianSizesToUsa (){
    return inputSize - 34
}

if (fromRussianSizesToUsa () <= 6 ) {
		alert ("Ваш американский размер " + fromRussianSizesToUsa () + " или S")
} 
else if (fromRussianSizesToUsa () > 6 && fromRussianSizesToUsa () <= 8 ) {
		alert ("Ваш американский размер " + fromRussianSizesToUsa () + " или M")
} 
else if (fromRussianSizesToUsa () > 8 && fromRussianSizesToUsa () <= 12 ) {
		alert ("Ваш американский размер " + fromRussianSizesToUsa () + " или L")
} 
else if (fromRussianSizesToUsa () > 12 && fromRussianSizesToUsa () <= 16 ) {
		alert ("Ваш американский размер " + fromRussianSizesToUsa () + " или XL")
} 
else if (fromRussianSizesToUsa () > 16 && fromRussianSizesToUsa () <= 20 ) {
		alert ("Ваш американский размер " + fromRussianSizesToUsa () + " или XXL")
} 
else if(fromRussianSizesToUsa () > 20)
		alert ("Прекращай жрать!")