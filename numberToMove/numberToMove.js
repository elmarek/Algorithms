function moveElementToEnd(array, toMove) {
  // Write your code here.
  let end = array.length - 1;
  let start = 0;
  for (var i = 0; i < end; i++) {
    while (array[end] === toMove) {
      end--;
    }
    if (end < i) {
      break;
    }
    if (array[i] === toMove) {
      let reference = array[end];
      array[end] = array[i];
      array[i] = reference;
    }
  }
  return array;
}
