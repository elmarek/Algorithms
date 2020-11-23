/*
Given an array of integers nums.

A pair (i,j) is called good if nums[i] == nums[j] and i < j.

Return the number of good pairs.

https://leetcode.com/problems/number-of-good-pairs/

*/

var numIdenticalPairs = function(nums) {
  if (nums.length === 1 || nums.length === 0) {
      return 0
  }
  let output = 0
  for (var i = 0; i < nums.length; i++) {

      for (var j = i + 1; j < nums.length; j++) {
          if (nums[i] === nums[j]) {
              output++
          }
      }
  }
  return output
};