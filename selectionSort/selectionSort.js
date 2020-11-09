//Algo Expert Problem

function selectionSort(array) {
  // Write your code here.
	for (var i = 0; i < array.length; i++) {
		for (var j = i + 1; j < array.length; j++) {
			if (array[i] > array[j]) {
				let toBeSwapped = array[i]
				array[i] = array[j]
				array[j] = toBeSwapped
			}
		}
	}
	return array
}