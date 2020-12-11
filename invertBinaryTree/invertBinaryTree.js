/*
Example:

Input:

     4
   /   \
  2     7
 / \   / \
1   3 6   9
Output:

     4
   /   \
  7     2
 / \   / \
9   6 3   1
*/

function invertBinaryTree(tree) {
  // Write your code here.
  let queue = [tree];
  while (queue.length) {
    const current = queue.shift();
    if (current === null) {
      continue;
    }
    swap(current);
    queue.push(current.left);
    queue.push(current.right);
  }
}

function swap(tree) {
  let left = tree.right;
  tree.right = tree.left;
  tree.left = left;
}
// This is the class of the input binary tree.
class BinaryTree {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}
