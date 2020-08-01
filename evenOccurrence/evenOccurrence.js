/*
 * Find the first item that occurs an even number of times in an array.
 * Remember to handle multiple even-occurrence items and return the first one.
 * Return null if there are no even-occurrence items.
*/

/*
 * example usage:
 * var onlyEven = evenOccurrence([1, 7, 2, 4, 5, 6, 8, 9, 6, 4]);
 * console.log(onlyEven); //  4
*/

var evenOccurrence = function(arr) {
  // create an object to store key value pairs
  var obj = {};

  // iterate through the array
  for (var i = 0; i < arr.length; i++) {
    // if object at array value is undefined
    if (obj[arr[i]] === undefined) {
      // set it equal to 1
      obj[arr[i]] = 1
    } else {
    // else increment by 1
      obj[arr[i]]++
    }
  // if any of the keys have a value of 2
    // return the key

    }
    for (var keys in obj) {
      if (obj[keys] === 2) {
        return keys;
      }
  }
  console.log(obj)
  // return null
  return null;
};