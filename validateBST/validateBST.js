/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }


 * @param {TreeNode} root
 * @return {boolean}
 */


/* 98. Validate Binary Search Tree
https://leetcode.com/problems/validate-binary-search-tree/

Given a binary tree, determine if it is a valid binary search tree (BST).

Assume a BST is defined as follows:

The left subtree of a node contains only nodes with keys less than the node's key.
The right subtree of a node contains only nodes with keys greater than the node's key.
Both the left and right subtrees must also be binary search trees.


Example 1:

    2
   / \
  1   3

Input: [2,1,3]
Output: true


Example 2:

    5
   / \
  1   4
     / \
    3   6

Input: [5,1,4,null,null,3,6]
Output: false
Explanation: The root node's value is 5 but its right child's value is 4.

*/


var isValidBST = function(root) {
  // Return value
  let isValid = true

  let recursor = (node) => {
    // if there is no node: return
    if (!node){return}

    //check that left is smaller && right is larger than this.val
    if (node.left.val && node.val > node.left.val) {
      recursor(node.left)
    } else {
      isValid = false
      return
    }

    if (node.right.val && node.val < node.right.val) {
      recursor(node.right)
    } else {
      isValid = false
      return
    }

  }

  recursor(root)

  return isValid
};
