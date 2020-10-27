/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */

/* 206. Reverse Linked List
https://leetcode.com/problems/reverse-linked-list/

Reverse a singly linked list.

Example:

Input: 1->2->3->4->5->NULL
Output: 5->4->3->2->1->NULL
Follow up:

A linked list can be reversed either iteratively or recursively. Could you implement both?

*/

var reverseList = function(head) {
  if(!head){
      return null
  }
  let values = []
  while(head) {
      values.push(head.val)
      head = head.next
  }
  let LL;
  for (var i = 0; i < values.length; i++) {
      LL = new ListNode(values[i], LL)
  }
  return LL
};