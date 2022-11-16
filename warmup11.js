/**
 * A zero-indexed array arr consisting of n integers is given. The dominator of array arr is the value that occurs in more than half of the elements of arr.
 * For example, consider array arr such that arr = [3,4,3,2,3,1,3,3]
 * The dominator of arr is 3 because it occurs in 5 out of 8 elements of arr and 5 is more than a half of 8.
 * Write a function  dominator(arr) that, given a zero-indexed array arr consisting of n integers, returns the dominator of arr.
 * The function should return −1 if array does not have a dominator. All values in arr will be >=0.
 *
 * @param {Array} arr
 * @return {number}
  */
 function dominator(arr) {
  const indexes = {};

for (let x = 0; x < arr.length; x++) {
  console.log(indexes[arr[x]])
indexes[arr[x]] = indexes[arr[x]] ? indexes[arr[x]] + 1: 1;
if (indexes[arr[x]] > arr.length / 2) return arr[x];
}

return -1;
}

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// ignore the below code // //
module.exports = dominator; //
// // // // // // // // // //
