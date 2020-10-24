



/**
 * @param {string} s
 * @return {number}
 *
 *  https://leetcode.com/problems/roman-to-integer/submissions/
 */
var romanToInt = function(s) {
  let dict = {
      "I": 1,
      "V": 5,
      "X": 10,
      "L": 50,
      "C": 100,
      "D": 500,
      "M": 1000
  }

  let total = 0
  // iterate over the string
  for (var i = 0; i < s.length; i++) {
      if(i > 0 && dict[s[i]] > dict[s[i - 1]]) {
          total -= (2 * dict[s[i - 1]])
      }
      total += dict[s[i]]
  }
return total
};
