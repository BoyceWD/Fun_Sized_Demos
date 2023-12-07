var errorMessages = [];
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

  module.exports = checkStringIsBinary;