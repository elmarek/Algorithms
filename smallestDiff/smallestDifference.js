// Naive solution N^2

function smallestDifference(arrayOne, arrayTwo) {
  // Write your code here.
  // variable for smallest difference
  let smallestDifference = Infinity;
  // array for the two integers
  let smallestArray;

  // double for loop
  for (var i = 0; i < arrayOne.length; i++) {
    for (var j = 0; j < arrayTwo.length; j++) {
      // if the difference is smaller than current smallest difference
      // update the current smallest difference and array
      if (Math.abs(arrayOne[i] - arrayTwo[j]) < Math.abs(smallestDifference)) {
        smallestDifference = arrayOne[i] - arrayTwo[j];
        smallestArray = [arrayOne[i], arrayTwo[j]];
      }
    }
  }
  // return the array of the two integers
  return smallestArray;
}
