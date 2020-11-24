/*
Given an array nums, write a function to move all 0's to the end of it while maintaining the relative order of the non-zero elements.

Example:

Input: [0,1,0,3,12]
Output: [1,3,12,0,0]
Note:

You must do this in-place without making a copy of the array.
Minimize the total number of operations.

https://leetcode.com/problems/move-zeroes/
*/

var moveZeroes = function (array) {
  // Write your code here.
  let end = array.length - 1;
  for (var i = 0; i < end; i++) {
    while (array[end] === 0) {
      end--;
    }
    if (array[i] === 0) {
      let mover = array.splice(i, 1);
      array.push(mover[0]);
      i--;
    }
  }
  return array;
};
