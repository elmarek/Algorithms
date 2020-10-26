// Write a function to find the longest common prefix string amongst an array of strings.

// If there is no common prefix, return an empty string "".



// Example 1:

// Input: strs = ["flower","flow","flight"]
// Output: "fl"
// Example 2:

// Input: strs = ["dog","racecar","car"]
// Output: ""
// Explanation: There is no common prefix among the input strings.


// Constraints:

// 0 <= strs.length <= 200
// 0 <= strs[i].length <= 200
// strs[i] consists of only lower-case English letters.

/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
  let result = strs[0]

  if (strs.length === 0) {
      return ''
  }

  for (var i = 0; i < result.length; i++) {
      for (var j = 0; j < strs.length; j++) {
        const other = strs[j];
        if (other[i] !== result[i]) {
          return other.slice(0, i);
        }
      }
  }
  return result

};

