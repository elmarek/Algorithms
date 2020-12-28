function kadanesAlgorithm(array) {
  let maxEnding = array[0];
  let maxSoFar = array[0];

  for (var i = 1; i < array.length; i++) {
    maxEnding = Math.max(array[i], maxEnding + array[i]);
    maxSoFar = Math.max(maxEnding, maxSoFar);
  }
  return maxSoFar;
}
