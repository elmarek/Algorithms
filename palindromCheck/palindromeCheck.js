// Algo Expert

function isPalindrome(string) {
  // Write your code here.
	let potentialPalindrome = '';
	for (var i = string.length - 1; i >= 0; i--) {
		potentialPalindrome += string[i]
	}
	if (string === potentialPalindrome) {
		return true
	} else {
		return false
	}
}