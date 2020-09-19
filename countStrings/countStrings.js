// HACKER RANK

/*
 * Complete the 'countStrings' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts STRING s as parameter.
 */

function countStrings(s) {
  if (s.length === 0) {
    return 0;
  }
  // Write your code here
  // result counter variable
  let firstAndLastEquality = 0;
  // iterate over the string
  for (var i = 0; i < s.length; i++) {
    // for i greater than zero shift the first index to the end
    if (i === 0) {
      if (s[i] === s[s.length - 1]) {
        firstAndLastEquality++;
        continue;
      } else {
        continue;
      }
    }
    // check first and last index for equality and increase counter if true
    let splitString = s.split("");
    let shiftedElement = splitString.shift();
    splitString.push(shiftedElement);
    s = splitString.join("");
    if (s[0] === s[s.length - 1]) {
      firstAndLastEquality++;
    }
  }
  //return counter
  return firstAndLastEquality;
}
