function sliceOffLastChar(str){
    var s = "";
    var sliceEndPos = str.length;
    var sliceStartPos = sliceEndPos -1;
    //for(i = 0; i < str.length; i++) {
    while(sliceEndPos > 0){
        sliceStartPos = sliceEndPos -1;
        //positionOfSecondToLastElement = str.length - 1;
        //var lastBit = str.slice(sliceEndPos-1);
        var lastBit = str.slice(sliceStartPos, sliceEndPos);
        sliceEndPos -= 1;
        s += lastBit;
        lastBit = "";
    }
    return s;
    
}
// 5:12PM 12.7.2023: Why does this function return '1110110011', when given an input of '0011'?
// 4:51PM 12.16.2023: This function can retrieve a strings characters last to first and create a reversed string of the input
// but for some resone does not return the reversed value when run in a unit test yet
module.exports = sliceOffLastChar;