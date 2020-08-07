let findSingleInt = (array) => {
  let intRef = {};
  for (var i = 0; i < array.length; i++) {
    if (intRef[array[i]] === undefined) {
      intRef[array[i]] = false;
    } else {
      delete intRef[array[i]];
    }
  }
  return Obj.Keys(intRef[0]);
};

// https://leetcode.com/problems/single-number/
