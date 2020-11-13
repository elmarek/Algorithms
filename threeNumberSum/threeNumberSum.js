function threeNumberSum(array, targetSum) {
  // Write your code here.
	// sort the array
	let sorted = array.sort((a ,b) => {return a - b})
	console.log(sorted)
	let triplets = []
	for (var i = 0; i < array.length - 2; i++) {
		let left = i + i
		let right = array.length - 1
		while (left < right) {
			let currentSum = array[i] + array[left] + array[right]
			if (currentSum === targetSum) {
				triplets.push([array[i], array[left], array[right]])
				left += 1
				right -= 1
			} else if (currentSum < targetSum) {
				left += 1
			} else if (currentSum > targetSum) {
				right -= 1
			}
		}
	}
	return triplets
}


