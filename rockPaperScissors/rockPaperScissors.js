/*
* Write a function that generates every sequence of throws a single
* player could throw over a three-round game of rock-paper-scissors.
*
* Your output should look something like:
*   ["RRR",
*    "RRP",
*    "RRS",
*    "RPR",
*    ...etc...
*   ]
*
* Extra credit:
*   - Make your function return answers for any number of rounds.
*
* Example:
* rockPaperScissors(5); // => ['RRRRR', 'RRRRP', 'RRRRS', etc...]
*
*/
// create a RPS object
var rockPaperScissors = function (
) {
  //create result variable
  var result = [];
  //create array of potential results
  var outcomes = ['r', 'p', 's'];
  //iterate over the array once for every potential outcome
  for (var i = 0; i < outcomes.length; i++) {
    for (var j = 0; j < outcomes.length; j++) {
      for (var m = 0; m < outcomes.length; m++) {
        result.push([outcomes[i], outcomes[j], outcomes[m]]);
      }
    }
  }
  // return result
  return result;
};

