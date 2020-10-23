/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} sum
 * @return {boolean}
 */

// input is a node; represents top of a tree && and integer representing a target sum
// output is a boolean representing whether the sum can be found in a path tree


var hasPathSum = function(root, sum) {
  if(!root) {return false}

  // create a variable that is a boolean that is equal to false
  let result = false

  // recursive function to sum values down tree path
  let pathSumHelper = (node, aggregator) => {
     // base case
      console.log(aggregator)
      if (!node) {
          return
      }
      if((!node.left) && (!node.right) && aggregator + node.val === sum) {
          result = true
          return
      }

   pathSumHelper(node.left, node.val + aggregator)
   pathSumHelper(node.right, node.val + aggregator)

}

  // Initialize recursive function
  pathSumHelper(root, 0)

  // Return result
  return result

};

