
var a = 1 + 1
-1 + 1 === 0 ? alert(0) : alert(2)
// из-за отсутствия ';' код читается как 1 + 1 -1 + 1 === 0 ? alert(0) : alert(2)





function getCheese() {
    return 
    { 
       cheeseType: "Gouda"
    } 
}
getCheese() 

// прочитает как 

/*function getCheese() {
    return; 
    { 
       cheeseType: "Gouda"
    } 
  }

  вместо 

function getCheese() {
    return { 
       cheeseType: "Gouda"
    } 
  }
  */

var a = 1;
var b = 5
(1 + 5).toString

//выдаст ошибку, '5 is not a function' , а если поставить ';' - будет работать верно

var a = 1;
var b = 5;
(1 + 5).toString()