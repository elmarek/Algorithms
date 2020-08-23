/*

Given n non-negative integers representing an elevation map where the width of each bar is 1, compute how much water it is able to trap after raining.


The above elevation map is represented by array [0,1,0,2,1,0,1,3,2,1,2,1]. In this case, 6 units of rain water (blue section) are being trapped. Thanks Marcos for contributing this image!

Example:

Input: [0,1,0,2,1,0,1,3,2,1,2,1]
Output: 6

*/

/*

Example:

Input: [0,1,0,2,1,0,1,3,2,1,2,1]
Output: 6

*/

var trap = function (height) {
  // return value
  let bucket = 0;

  // traverse the heights
  for (var i = 0; i < height.length; i++) {
    // variable that contains trapped rain water
    let trappedWater = 0;
    let maxLeft = 0;
    let maxRight = 0;

    //check max height right
    for (var j = i + 1; j < height.length; j++) {
      if (height[j] > maxRight) {
        maxRight = height[j];
      }
    }

    // check max height left
    for (var k = i - 1; k >= 0; k--) {
      if (height[k] > maxLeft) {
        maxLeft = height[k];
      }
    }
    // subtract difference of current hight from the smallest of maxLeft and maxRight heights
    // add that to bucket
    if (Math.min(maxLeft, maxRight) - height[i] > 0) {
      bucket += Math.min(maxLeft, maxRight) - height[i];
    }
  }
  return bucket;
};
