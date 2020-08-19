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
    let heighest = height[i]
    let lowest = height[i]
    for (var j = i + 1; j < height.length; j++) {

      // when you hit a higher elevation: add the rain water to a bucket
        // repeat process at the new highest elevation
      if (height[j] >= height[i]) {
        bucket += trappedWater
          console.log(bucket, i, j)
        i = j - 1
        break;
      }
    // if the next elevation is lower than the starting elevation begin collecting rainwater
      if (height[j] < height[i] || (height[j] < height[i] && height[j] > ) {
        trappedWater += height[i] - height[j]
      }
    }
  }
  return bucket;
};


let Input = [0,1,0,2,1,0,1,3,2,1,2,1]

let test = trap(Input)

console.log(test)