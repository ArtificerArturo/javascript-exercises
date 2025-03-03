const removeFromArray = function (arrayToBePruned, ...valueToPrune) {

    for (let individualValueToPrune of valueToPrune) {

        let indexOfBadValue = arrayToBePruned.indexOf(individualValueToPrune)
        while (arrayToBePruned.indexOf(individualValueToPrune) > -1)
            arrayToBePruned.splice(indexOfBadValue, 1)

    }

    return arrayToBePruned
};

//console.log(removeFromArray([5, 6, 7, 6, 8, 0], 6, 7))

// Do not edit below this line
module.exports = removeFromArray;
