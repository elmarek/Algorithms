/*
 *  Write a function that takes as its input a string and returns an array of
 *  arrays as shown below sorted in descending order by frequency and then by
 *  ascending order by character.
 *
 *       :: Example ::
 *
 *  characterFrequency('mississippi') ===
 *  [
 *    ['i', 4],
 *    ['s', 4],
 *    ['p', 2],
 *    ['m', 1]
 *  ]
 *
 *       :: Example2 ::
 *
 *  characterFrequency('miaaiaaippi') ===
 *  [
 *    ['a', 4],
 *    ['i', 4],
 *    ['p', 2],
 *    ['m', 1]
 *  ]
 *
 *       :: Example3 ::
 *
 *  characterFrequency('mmmaaaiiibbb') ===
 *  [
 *    ['a', 3],
 *    ['b', 3],
 *    ['i', 3],
 *    ['m', 3]
 *  ]
 *
 */

var characterFrequency = function (string) {
  // split string into array of letters
  let splitString = string.split("");

  //create reference object to keep track of letters
  let reference = {};

  let result = [];

  //iterate through the string array and add values to reference object
  for (var i = 0; i < splitString.length; i++) {
    if (reference[splitString[i]]) {
      reference[splitString[i]]++;
    } else {
      reference[splitString[i]] = 1;
    }
  }

  for (var key in reference) {
    result.push([key, reference[key]]);
  }

  result.sort(function (a, b) {
    return b[1] - a[1];
  });

  return result;
};
