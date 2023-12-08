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
    
}
// 5:12PM 12.7.2023: Why does this function return '1110110011', when given an input of '0011'?
module.exports = sliceOffLastChar;