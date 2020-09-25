/*

Determine whether an integer is a palindrome. An integer is a palindrome when it reads the same backward as forward.

Example 1:

Input: 121
Output: true
Example 2:

Input: -121
Output: false
Explanation: From left to right, it reads -121. From right to left, it becomes 121-. Therefore it is not a palindrome.
Example 3:

Input: 10
Output: false
Explanation: Reads 01 from right to left. Therefore it is not a palindrome.
Follow up:

Could you solve it without converting the integer to a string?

*/

/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function (x) {
  if (x < 0) {
    return false;
  }
  x = x.toString();
  array = x.split("");
  if (array.length === 1) {
    return true;
  }

  let isXPalindrome = true;

  while (array.length > 1) {
    if (array[0] === array[array.length - 1]) {
      array.shift();
      array.pop();
    } else {
      isXPalindrome = false;
      break;
    }
  }
  return isXPalindrome;
};
