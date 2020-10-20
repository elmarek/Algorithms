/*
 * Complete the 'findDolls' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts INTEGER_ARRAY size as parameter.
 */

function findDolls(size) {
  // Write your code here
  // sort array
  size.sort(function (a, b) {
    if (a > b) {
      return -1;
    }
    if (a < b) {
      return 1;
    }
    return 0;
  });
  // create result counter
  let boxes = 0;
  // iterate over array
  for (var i = 0; i < size.length; i++) {
    // second loop to check whether box is half the size
    for (var j = i + 1; j < size.length; j++) {
      // if so remove the box and increase the counter
      if (size[i] >= size[j] * 2) {
        size.splice(j, 1);
        break;
      }
    }
    boxes++;
  }
  return boxes;
}
