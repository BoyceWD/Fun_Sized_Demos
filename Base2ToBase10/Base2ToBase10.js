
/* 
 After having had mutch difficulty getting a working implimentation of a Stack class, I've decided instead to use a string as an
 alternative to an array. I should be able to use a string to store the text input from the user. I can use the slice method
 to extract the contained characters last to first.
 */

 // ToDo
 // write code to convert binary digits contained in string last to first to decimal.


 
var errorMessages = [];
function extractInput(){
    let input = document.forms["binaryInputForm"]["txtBinaryInput"].value

    //ToDo

    // check if input is a length of eight characters
    // check that input contains only ones and zeros
    // if the input fails to meet the previous two criteria alert user
    // if input is valid instantiate a stack and insert input into the stack
    console.log(input);
}

function checkStringIsNotNull(str, errorMessages){
  isNotNull = true;
    if(str == ""){
      errorMessages.push(" " + "Input cannot be null");
      isNotNull = false;
    }
    return isNotNull;
}

function checkStringLength(str, errorMessages) {
    let isEightLong = false;

    if (str.length == 8) {
        isEightLong = true;
    } else if ((str.length > 8 || str.length < 8) && str !== null) {
        errorMessages.push(" " + "Input must be eight characters long");
    }

    return isEightLong;
}


/*
function checkStringIsBinary(str, errorMessages) {
    let isBinary = false;
    for (let i = 0; i < str.length; i++) {
      if (str[i] == "0" || str[i] == "1") {
        isBinary = true;
      } else if (str[i] != "0" || str[i] != "1") {
        isBinary = false;
        errorMessages.push(" " + "Input may only contain 1s and 0s");
      }
    }
    return isBinary;
}
*/
function checkStringIsBinary(str, errorMessages) {
  let isBinary = true;
  for (let i = 0; i < str.length; i++) {
      if (str[i] != "0" && str[i] != "1") {
        isBinary = false;
        
    }
    
  }
  if(isBinary == false){
    errorMessages.push(" " + "Input may only contain 1s and 0s");
  }
  return isBinary;
}
function validateInput(){

}
var a ="101010";/*
function sliceOffLastChar(str){
  s = "";
  sliceEndPos = str.length;
  for(i = 0; i < str.length; i++) {
      
      positionOfSecondToLastElement = str.length - 1;
      let lastBit = str.slice(sliceEndPos-1);
      sliceEndPos -= 1;
      s += lastBit;
  }
  return s;
  
}*/
function sliceOffLastChar(str){
  var s = "";
  var sliceEndPos = str.length;
  var sliceStartPos = sliceEndPos -1;

  while(sliceEndPos > 0){
      sliceStartPos = sliceEndPos -1;
      var lastBit = str.slice(sliceStartPos, sliceEndPos);
      sliceEndPos -= 1;
      s += lastBit;
      lastBit = "";
  }
  return s;
  
}
f = sliceOffLastChar('0011');
console.log(f);
b = sliceOffLastChar(f);
console.log(b);
console.log(a);
a;
console.log(a.slice(3,5));
isb = checkStringIsBinary(a ,errorMessages);
isnb = checkStringIsBinary("1o01", errorMessages);
isl = checkStringLength("1o01", errorMessages);
isnn = checkStringIsNotNull("a", errorMessages);
isn = checkStringIsNotNull("", errorMessages);

console.log(isb + " " + errorMessages);
console.log(isnb + " " + errorMessages);
console.log(isl + " " + errorMessages);
console.log(isnn + " " + errorMessages);
console.log(isn + " " + errorMessages);
