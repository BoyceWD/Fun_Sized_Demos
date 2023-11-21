/* 
 After having had mutch difficulty getting a working implimentation of a Stack class, I've decided instead to use a string as an
 alternative to an array. I should be able to use a string to store the text input from the user. I can use the slice method
 to extract the contained characters last to first.
 */

 // ToDo
 // write code to convert binary digits contained in string last to first to decimal.

function extractInput(){
    let input = document.forms["binaryInputForm"]["binaryInput"].value

    //ToDo

    // check if input is a length of eight characters
    // check that input contains only ones and zeros
    // if the input fails to meet the previous two criteria alert user
    // if input is valid instantiate a stack and insert input into the stack
    console.log(input);
}
function validateInput(){

}
function checkStringIsBinary(str) {
    let isBinary = false;
    for (let i = 0; i < str.length; i++) {
      if (str[i] == "0" || str[i] == "1") {
        isBinary = true;
      } else {
        isBinary = false;
      }
    }
    return isBinary;
}
var a ="101010";
console.log(a);
a;
console.log(a.slice(3,5));
