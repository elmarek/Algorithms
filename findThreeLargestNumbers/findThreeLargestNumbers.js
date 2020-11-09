//  Algo Expert Problem

function findThreeLargestNumbers(array) {
  // Write your code here.
	// Edge cases
	if (array.length === 3) {
		return array.sort((a, b) => { return a - b})
	}
	let threelargest = array.slice(0, 3)
	let sorted = threelargest.sort((a,b) => {return a - b})
	for (var i = 3; i < array.length; i++) {
		console.log(sorted)
		if (array[i] > sorted[2]) {
			sorted.push(array[i])
			sorted.shift()
		} else if (array[i] > sorted[1]) {
			sorted[1] = array[i]
		} else if (array[i] > sorted[0]) {
			sorted[0] = array[i]
		}
	}
	return sorted
}