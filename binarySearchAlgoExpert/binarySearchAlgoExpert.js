function binarySearch(array, target) {
  // Write your code here.
	// Edge cases
	  //if last value is smaller than target return -1
	  // if first value is greater than target return -1
  if (target > array[array.length - 1] || target < array[0]) {
		return -1
	}
	// identify start and end of search
	let first = 0
	let last = array.length - 1

  while (first <= last) {
		let middle = Math.floor((first + last) / 2)
		if (first === last && array[last] !== target) { return -1 }
		if (array[middle] === target)	{ return middle }

		if (array[middle] < target) {
			first = middle + 1
		}
		if (array[middle]  > target) {
			last = middle - 1
		}
	}
}
