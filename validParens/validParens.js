/*
Given a string containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

An input string is valid if:

Open brackets must be closed by the same type of brackets.
Open brackets must be closed in the correct order.
Note that an empty string is also considered valid.
*/

var isValid = function (s) {
  // Edge Cases
  if (s.length === 0) {
    return true;
  } else if (s.length === 1) {
    return false;
  }
  // Reference Dictionary
  var dictionary = {
    "(": ")",
    "{": "}",
    "[": "]",
  };

  // split the string
  let isValid = true;
  let split = s.split("");

  // iterate over the array
  for (var i = 0; i < split.length; i++) {
    //iterate through ineer values
    for (var j = i + 1; j < split.length; j++) {
      // if the next are closing parens take them out of array
      if (
        dictionary[split[j]] &&
        dictionary[split[j]] === split[j + 1] &&
        split.length > 1
      ) {
        split.splice(j, 2);
        j -= 2;
        if (split.length === 0) {
          return isValid;
        }
      }
    }

    // if the next or last are closing parens take them out of array
    if (dictionary[split[i]] === split[i + 1] && split.length > 1) {
      split.splice(i, 2);
      i--;
    } else if (
      dictionary[split[i]] === split[split.length - 1] &&
      split.length > 1
    ) {
      split.shift();
      split.pop();
      i--;
    } else {
      isValid = false;
      break;
    }
  }
  return isValid;
};
