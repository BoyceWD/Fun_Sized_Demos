  //var errorMessages = [];
  
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



function checkStringIsBinary(str, errorMessages){
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
/* validateInput(){
    return null;
 
} */
module.exports = checkStringIsBinary;
module.exports = checkStringLength;