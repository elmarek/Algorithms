/*

An array is monotonic if it is either monotone increasing or monotone decreasing.

An array A is monotone increasing if for all i <= j, A[i] <= A[j].  An array A is monotone decreasing if for all i <= j, A[i] >= A[j].

Return true if and only if the given array A is monotonic.

*/

function isMonotonic(array) {
  // Write your code here.
  let increasing;
  let decreasing;
  let equal;
  if (array.length === 0 || array.length === 1) {
    return true;
  }
  for (var i = 0; i < array.length; i++) {
    if (array[i] < array[i - 1]) {
      decreasing = true;
    }
    if (array[i] > array[i - 1]) {
      increasing = true;
    }
    if (array[i] === array[i - 1]) {
      equal = true;
    }
    if (decreasing && increasing) {
      return false;
    }
  }
  if (increasing === true && !decreasing) {
    return true;
  }
  if (decreasing === true && !increasing) {
    return true;
  }
  if (equal === true && !decreasing && !decreasing) {
    return true;
  }
}
