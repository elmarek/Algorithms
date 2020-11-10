//  https://leetcode.com/problems/permutations/submissions/

var permute = function(nums) {
  let permutations = []
  if (nums.length === 0 || nums.length === 1) {
      permutations.push(nums)
      return permutations
  }
  let permuter = (array, permutation = []) => {
      if (array.length === 0) {
          permutations.push(permutation)
          return
      }
      for (var i = 0; i < array.length; i++) {
          let copy = array.slice()
          let newArray = copy.splice(i, 1)
          let newPerm = permutation.concat(newArray)
          permuter(copy, newPerm)
      }
  }
  permuter(nums)
  return permutations
};