/*
Given a string, find the length of the longest substring without repeating characters.

Example 1:

Input: "abcabcbb"
Output: 3
Explanation: The answer is "abc", with the length of 3.
Example 2:

Input: "bbbbb"
Output: 1
Explanation: The answer is "b", with the length of 1.
Example 3:

Input: "pwwkew"
Output: 3
Explanation: The answer is "wke", with the length of 3.
             Note that the answer must be a substring, "pwke" is a subsequence and not a substring.
*/

var lengthOfLongestSubstring = function (s) {
  //Edge Case
  if (s.length === 1) {
    return 1;
  }
  // Dictionary and return value
  let dictionary = {};
  let count = 0;

  // iterate over the string
  for (var i = 0; i < s.length; i++) {
    let innerCount = 0;

    for (var j = i; j < s.length; j++) {
      // if we have not seen the value add it to dictionary
      if (dictionary[s[j]] === undefined) {
        dictionary[s[j]] = s[j];
        innerCount++;
        if (innerCount > count) {
          count = innerCount;
        }
      } else {
        dictionary = {};
        if (innerCount > count) {
          count = innerCount;
          innerCount = 0;
        }
        break;
      }
    }
  }
  return count;
};
