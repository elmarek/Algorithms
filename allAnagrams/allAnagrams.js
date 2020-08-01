/**
 * Given a single input string, write a function that produces all possible anagrams
 * of a string and outputs them as an array. At first, don't worry about
 * repeated strings.  What time complexity is your solution?
 *
 * Extra credit: Deduplicate your return array without using uniq().
 */

/**
  * example usage:
  * var anagrams = allAnagrams('abc');
  * console.log(anagrams); // [ 'abc', 'acb', 'bac', 'bca', 'cab', 'cba' ]
  */

var allAnagrams = function(string) {
  // create a result array
  var result = [];
  // base case - if string is a single letter, return it
  if (string.length === 1) {
    result.push(string);
    return result;
  }

  // iterate over the array
  for (var i = 0; i < string.length; i++) {
    var first = string[i];
    var charsLeft = string.substring(0, i) + string.substring(i + 1);
    var innerPermutations = allAnagrams(charsLeft);
    for (var j = 0; j < innerPermutations.length; j++) {
      result.push(first + innerPermutations[j]);
    }
  }

  // return a result array
  return result;

};

// time complexity = linear