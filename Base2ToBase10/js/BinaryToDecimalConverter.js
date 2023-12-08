function convertBinaryToDecimal(str){
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
