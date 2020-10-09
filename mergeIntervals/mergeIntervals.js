
var merge = function(intervals) {
  // sort
  intervals.sort((a, b) => {
    if (a[0] > b[0]) {
      return 1
    }
    if (a[0] < b[0]) {
      return -1
    }
    return 0
  })

  if (intervals.length === 0) {
      return intervals
  }
  for (var i = 0; i < intervals.length; i++) {
    if(intervals[i+1] === undefined) {
      break;
    }
    if(intervals[i][1] >= intervals[i + 1][0]){
      intervals[i][1] = Math.max(intervals[i + 1][1], intervals[i][1])
      intervals.splice(i + 1, 1)
      i--
    }
  }
  return intervals
};

