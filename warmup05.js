/**
 * 1 Write a function named helloWorld that:
 * takes 1 argument, a language code (e.g. "fr", "es", "en")
 * returns "Hello, World" for the given language, for at least 3 languages. It should default to returning English.
 * ex: helloWorld('fr') ==> 'Bonjour tout le monde'
 *    helloWorld('es') ==> 'Hola, Mundo'
 *    helloWorld('') ==> 'Hello, World'
 *
 * @function helloWorld
 * @param {string} str
 * @return {string}
 */
function helloWorld(str){
    if(str === "fr"){return "Bonjour tout le monde"}
    else if(str === "es"){return "Hola, Mundo"}
    while(typeof(str)==="string"){
        return "Hello, world"
    }return false
}

/**
 * 2 write a function to Reverse an array without use array.reverse() method:
 * ex: reverseArray([1,2,3]) ==> [3,2,1]
 *
 * @function reverseArray
 * @param {Array<number>} array
 * @return {Array<number>}
 */
function reverseArray(arr){
    var reverse=[]
    var i=arr.length-1
    while(i>=0){
        reverse.push(i)
        i--
    }return reverse
}

/**
 * 3 Write a function called laugh() that takes one parameter,
 * num that represents the number of "ha"s to return.
 * laugh(6); => "hahahahahaha"
 *
 * @function laugh
 * @param {number} n
 * @return {string}
 */
function laugh(n){
    var i=0
    var laugh=""
    while(i<=n){
        laugh+="ha"
        i++
    }return laugh
}

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//ignore the below code // //
module.exports.helloWorld = helloWorld; //
module.exports.reverseArray = reverseArray; //
module.exports.laugh = laugh; //
// // // // // // // // // // // // // // //
