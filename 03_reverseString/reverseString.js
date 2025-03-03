const reverseString = function (text) {
    let letterArray = text.split("")
    let arrayLength = letterArray.length
    let reversedArray = []
    for (i = arrayLength - 1; i > -1; i--) {
        reversedArray.push(letterArray[i])
    }
    let reversedString = reversedArray.join("")
    return reversedString

};

console.log(reverseString("nascar"))

// Do not edit below this line
module.exports = reverseString;
