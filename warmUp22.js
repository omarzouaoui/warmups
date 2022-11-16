/**
 * // Complete the greatestProduct method so that it'll find the greatest product of five consecutive digits in the given string of digits.
 *
 * For example:
 *
 * greatestProduct("123834539327238239583") // should return 3240
 * The input string always has more than five digits.
 *
 *
 * @param {string} input
 * @return {number}
 */

 function product(arr){
    var p=1
    for(i=0;i<arr.length;i++){
        p=p*arr[i]
    }
    return p
}
function greatestProduct(input) {
    if(input.length<5){
        return 'should have length>5'
    }
   else{
       var arr=input.split("")
       var arr1=[]
       for(i=0;i<arr.length;i++){
           arr1.push(parseInt(arr[i]))
       }
   }
   var max=0
   for(i=0;i<arr1.length;i++){
       var p=arr1[i]
       for(j=i+1;j<i+5;j++){
           p=p*arr1[j]
       }
       if(p>max){
           max=p
       }
   }
    return max
}

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// ignore the below code // //
module.exports = greatestProduct; //
// // // // // // // // /
