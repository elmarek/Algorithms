function longestPeak(array) {
  // Write your code here.
  let peaks = [];
  let peakLength = 1;
  let increasing;
  let decreasing;
  let reference = [];
  if (array.length === 0 || array.length === 1 || array.length === 2) {
    return 0;
  }
  for (var i = 1; i < array.length; i++) {
    // Adding to peakLength when increasing
    if (array[i] > array[i - 1] && array[i] < array[i + 1] && !decreasing) {
      peakLength++;
      increasing = true;
    }
    // Identify peak and set decreasing variable
    if (array[i] > array[i + 1] && array[i] > array[i - 1]) {
      peakLength++;
      decreasing = true;
    }
    // Identify the end of the peak length
    if (decreasing && (array[i] <= array[i + 1] || i === array.length - 1)) {
      peakLength++;
      peaks.push(peakLength);
      increasing = false;
      decreasing = false;
      peakLength = 1;
    }
    // Add decreasing numbers
    if (decreasing && array[i] > array[i + 1] && array[i] < array[i - 1]) {
      peakLength++;
    }
    if (increasing && array[i] === array[i + 1]) {
      increasing = false;
      decreasing = false;
      peakLength = 1;
    }
  }
  peaks.sort();
  if (peaks.length === 0) {
    return 0;
  }
  return peaks[peaks.length - 1];
}
