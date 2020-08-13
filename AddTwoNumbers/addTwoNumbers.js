/*

You are given two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order and each of their nodes contain a single digit. Add the two numbers and return it as a linked list.

You may assume the two numbers do not contain any leading zero, except the number 0 itself.

Example:

Input: (2 -> 4 -> 3) + (5 -> 6 -> 4)
Output: 7 -> 0 -> 8
Explanation: 342 + 465 = 807.

*/

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
var addTwoNumbers = function (l1, l2) {
  // create array to store values
  let numArray = [];

  // create function to traverse linked lists and add values to array
  let traverser = (node) => {
    // counter variable to keep track of numArray index
    let counter = 0;
    while (node.next) {
      if (numArray[counter] === undefined) {
        numArray.push(node.value);
      } else {
        numArray[counter] = numArray[counter] + node.value;
      }
      counter++;
    }
  };
  // instantiate traverser function for each node value
  traverser(l1);
  traverser(l2);

  // iterate through the numArray checking for any values greater than 10
  // if value is greater than 10, carry over the remainder to next index
  for (var i = 0; i < numArray.length; i++) {
    if (numArray[i] > 9) {
      numArray[i] = numArray[i] % 10;
      if (numArray[i + 1] === undefined) {
        numArray[i + 1] = 1;
      } else {
        numArray[i + 1] = numArray[i + 1] + 1;
      }
    }
  }

  // we now have an array of values that need to be added to new linked list

  function ListNode(val, next) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }

  //create the last node with next value of null and value of                          numArray[numArray.length - 1]

  // create variable that points to list node
  var i = numArray.length - 1;
  var list = null;
  while (i >= 0) {
    list = new ListNode(numArray[i], list);
    i--;
  }
  return list;
};
