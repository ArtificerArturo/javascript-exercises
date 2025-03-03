const sumAll = function (startNum, endNum) {
    if (!Number.isInteger(startNum) || !Number.isInteger(endNum)) return "ERROR"
    if (startNum < 0 || endNum < 0) return "ERROR"

    let distanceBetween = Math.abs(startNum - endNum)
    let answer = 0
    if (startNum <= endNum) {
        for (i = 0; i <= distanceBetween; i++) {
            answer += startNum + i
        }
    } else {
        for (i = 0; i <= distanceBetween; i++) {
            answer += endNum + i
        }
    }
    return answer

};
console.log(sumAll(5, 12))
console.log(sumAll(12, 5))

// Do not edit below this line
module.exports = sumAll;
