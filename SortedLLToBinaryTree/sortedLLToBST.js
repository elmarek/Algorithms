

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {ListNode} head
 * @return {TreeNode}
 *
 * https://leetcode.com/problems/convert-sorted-list-to-binary-search-tree/
 */


var sortedListToBST = function(head) {

  // Edge Case
  if(!head) {
      return null
  }

  // extract LL values to array
  let arrayOfValues = []
  while(head) {
      arrayOfValues.push(head.val)
      head = head.next
  }

  // split array into middle value & left half & right half
  // do this recursively adding the middle value as the node
  let bstBuilder = (array) => {
    // Base Case
    if(array.length === 0) {
      return
    }
    let nodeValue = array[Math.floor(array.length / 2)]
    let left = array.slice(0, Math.floor(array.length / 2))
    let right = array.slice(Math.floor(array.length / 2) + 1)
    let bst = new TreeNode(nodeValue, bstBuilder(left), bstBuilder(right))
    return bst
  }
  return bstBuilder(arrayOfValues)
};