/**
 * @param {string[]} words
 * @param {string} order
 * @return {boolean}
 */
var isAlienSorted = function (words, order) {
  //helper to check if alphabetical
  var isAlphabetical = function (w1, w2) {
    //if the two words are the same
    if (w1 === w2) {
      return true;
    }
    var areEqual = true;
    for (var i = 0; i < w1.length && i < w2.length; i++) {
      //console.log('letters are: ', w1[i], w2[i])
      if (order.indexOf(w1[i]) > order.indexOf(w2[i])) {
        return false;
      } else if (order.indexOf(w1[i]) < order.indexOf(w2[i])) {
        areEqual = false;
        break;
      }
    }
    if (areEqual) {
      //console.log('equal so far!')
      if (w1.length < w2.length) {
        return true;
      } else {
        return false;
      }
    }
    // true
    return true;
  };

  //iterate thru the words
  for (var i = 0; i < words.length - 1; i++) {
    //check if alphabetical
    if (!isAlphabetical(words[i], words[i + 1])) {
      //if not alphabetical, break function and return false
      return false;
    }
  }
  //if reached end of words list and haven't broken
  return true;
};
