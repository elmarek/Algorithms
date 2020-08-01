/*
 * Given a sorted array, find the index of an element
 * using a binary search algorithm.
 *
 * Example usage:
 *
 * var index = binarySearch([1, 2, 3, 4, 5], 4);
 * console.log(index); // 3
 * var index = binarySearch([1, 2, 3, 4, 5], 8);
 * console.log(index); // null
 */

var binarySearch = function (array, target) {
  if (array[array.length -1] < target) {
    return null;
  }
  var first = 0
  var last = array.length - 1

  let recursor = (array, target, first, last) => {
    var middle = Math.floor((array.length) / 2)

    if (middle[array] === target) {
      return middle;
     }

    if (array[middle] > target) {
      return recursor(array, target, first, middle - 1)
    } else {
      return recursor(array, target, middle + 1, last)
    }
  }
     recursor(array, target, first, last)
};
