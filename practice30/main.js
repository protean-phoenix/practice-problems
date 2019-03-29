function randomRange (startNum, endNum){
    var answer = Math.floor(Math.random() * (endNum - startNum + 1)) + startNum;
    if (Array.isArray(startNum)) {
        answer = startNum[Math.floor(Math.random()* startNum.length)];
    }
    return answer;
}