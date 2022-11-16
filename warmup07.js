// 1-Create arrays in the global scope consisting of strings that represent:
// -name of females in your class
// -name of males in your class
// -name of your class instructors

["I don't know"]

/**
 * 2-write a function called (midElement) that takes an array as an argument and returns the element that is located in the middle of that array.
 * @param {Array<any>} array
 * @return {any}
 */
 function midElement(array) {
    var mid = Math.floor(array.length / 2)
    return array[mid]
}


/**
 *
 * 3-write a function called (multipleEvenIndexes) that takes an array of numbers, as an argument and returns an array of numbers, multiplied by two for even indexes.
 *
 * @param {Array<number>} array
 * @return {Array<number>}
 */
function multipleEvenIndexes(array) {
    var i=0
    while(i<array.length){
        if(i%2===0){
            array[i]=array[i]*2
        }
        i++
    }return array
}

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//ignore the below code // //
module.exports.midElement = midElement; //
module.exports.multipleEvenIndexes = multipleEvenIndexes; //
// // // // // // // // // /
