var moveZeroes = function (array) {
  // Write your code here.
  let end = array.length - 1;
  for (var i = 0; i < end; i++) {
    while (array[end] === 0) {
      end--;
    }
    if (array[i] === 0) {
      let mover = array.splice(i, 1);
      array.push(mover[0]);
      i--;
    }
  }
  return array;
};
