/*

Given the root node of a binary search tree (BST) and a value. You need to find the node in the BST that the node's value equals the given value. Return the subtree rooted with that node. If such node doesn't exist, you should return NULL.

https://leetcode.com/problems/search-in-a-binary-search-tree/
*/

class Solution {
  public TreeNode searchBST(TreeNode root, int val) {
      if(root == null)
      {
          return root;
      }
      if (root.val != val)
      {
          if (val < root.val)
          {
            return searchBST(root.left, val);
          }
          else if (val > root.val)
          {
            return searchBST(root.right, val);
          }
      }
      else
      {
        return root;
      }

      return null;
  }
}