/**
 * Given a string, capitalize the letters that occupy even indexes and odd indexes separately, and return as shown below. Index 0 will be considered even.
 * For example, capitalize("abcdef") = ['AbCdEf', 'aBcDeF']. See test cases for more examples.
 *              capitalize("azerty") = ['AzErTy','aZeRtY']
 * The input will be a lowercase string with no spaces.
 * Good luck!
 *
 * @param {string} str
 * @return {string[]}
 */
function capitalize(str) {
    var first=""
    var second=""
    for(var i=0;i<str.length;i++){
        if(i%2!==0){
            first +=str[i].toUpperCase()
        }else if(i%2===0){
            first+=str[i]
        }
    }
    for(var j=0;j<str.length;j++){
        if(i%2!==0){
            second +=str[j]
        }else if(i%2===0){
            second+= str[j].toUpperCase()
        }
    }
    return [first,second]
}

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// ignore the below code // //
module.exports = capitalize; //
// // // // // // // // // //
