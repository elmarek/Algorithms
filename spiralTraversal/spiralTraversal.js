/*
 * Write a function that accepts a 2-dimensional array (that is, an array containing many same-length arrays),
 * and prints out every value found, but in a spiral from the upper left in to the center
 * Please write some form of specs, tests, or assertions for your code, and check as many edge cases as you can think of
 *
 * example:

    spiralTraversal([
      [1,2,3],
      [4,5,6],
      [7,8,9]
    ]);

    returns [1, 2, 3, 6, 9, 8, 7, 4, 5]
 */

var spiralTraversal = function (matrix) {
  function spiralTraverse(array) {
    let result = [];

    let startColumn = 0;
    let endColumn = array[0].length - 1;
    let startRow = 0;
    let endRow = array.length - 1;

    while (startColumn <= endColumn && startRow <= endRow) {
      console.log("startColumn :", startColumn, " Endcolumn :", endColumn);
      console.log("StartRow :", startRow, " EndRow :", endRow);

      for (var i = startColumn; i <= endColumn; i++) {
        console.log("first loop ", array[startRow][i]);
        result.push(array[startRow][i]);
      }
      //Edge case when number of rows is even
      if (startRow === endRow) {
        break;
      }
      for (var j = startRow + 1; j <= endRow; j++) {
        console.log("second loop ", array[j][endColumn]);
        result.push(array[j][endColumn]);
      }
      //Edge case when number of columns is even
      if (startColumn === endColumn) {
        break;
      }
      for (var k = endColumn - 1; k >= startColumn; k--) {
        console.log("third loop ", array[endRow][k]);
        result.push(array[endRow][k]);
      }
      for (var p = endRow - 1; p > startRow; p--) {
        console.log("last loop ", array[p][startColumn]);
        result.push(array[p][startColumn]);
      }
      console.log("Array so far is :", result);
      startColumn++;
      endColumn--;
      startRow++;
      endRow--;
    }
    return result;
  }
};
