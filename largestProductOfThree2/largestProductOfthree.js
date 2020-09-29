/* Write a function that finds the largest possible product of any three numbers
 * from an array.
 *
 * Extra credit: Make your function handle negative numbers.
 */
var largestProductOfThree = function (arr) {
  let hasPositives = false;
  let hasNegatives = false;
  let mixed = false;
  arr = arr.sort(function (a, b) {
    return b - a;
  });
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] === 0) {
      continue;
    }
    if (arr[i] > 0) {
      hasPositives = true;
    } else if (arr[i] < 0) {
      hasNegatives = true;
    }
  }
  if (hasPositives === true && hasNegatives === true) {
    mixed = true;
  }
  if (mixed) {
    var lastTwo = Math.abs(arr[arr.length - 1] * arr[arr.length - 2]);
    var twoThree = Math.abs(arr[1] * arr[2]);
    if (lastTwo >= twoThree) {
      return arr[0] * lastTwo;
    }
    if (lastTwo < twoThree) {
      return arr[0] * twoThree;
    }
  }
  if (hasNegatives) {
    return arr[0] * arr[1] * arr[2];
  }
  if (hasPositives) {
    return arr[0] * arr[1] * arr[2];
  }
};
