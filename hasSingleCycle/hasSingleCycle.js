function hasSingleCycle(array) {
  let jumps = 0;
  let startingIndex = 0;
  let currentIndex = 0;
  // jump through the array n times (n is the length of the array)
  while (jumps <= array.length) {
    // If we are at the last jump and we arrive at our starting location, single cycle = true
    if (jumps === array.length && currentIndex === startingIndex) {
      return true;
    }
    // check to see we havent already visited index
    if (array[currentIndex] === true) {
      return false;
    } else {
      let reference = currentIndex;
      currentIndex = (currentIndex + array[currentIndex]) % array.length;
      currentIndex >= 0
        ? (currentIndex = currentIndex)
        : (currentIndex = currentIndex + array.length);
      array[reference] = true;
      jumps++;
    }
  }
}
