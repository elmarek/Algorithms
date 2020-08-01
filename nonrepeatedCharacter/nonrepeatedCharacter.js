/**
 * Given an arbitrary input string, return the first nonrepeated character in
 * the string. For example:
 *
 *   firstNonRepeatedCharacter('ABA'); // => 'B'
 *   firstNonRepeatedCharacter('AACBDB'); // => 'C'
 */

var firstNonRepeatedCharacter = function(string) {
  var charObj = {};

  for (var i = 0; i < string.length; i++) {
    if (charObj[string[i]] === undefined) {
      charObj[string[i]] = 1
    } else {
      charObj[string[i]]++
    }
  }

  for (var key in charObj) {
    if (charObj[key] === 1){
      return key;
    }
  }
  return null;
};