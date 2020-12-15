function numberOfWaysToMakeChange(n, denoms) {
  // Write your code here.
  // inputs: array of denoms, and target amount
  // output: number of ways to make change
  let array = new Array(n + 1).fill(0);
  array[0] = 1;
  for (let denom of denoms) {
    for (var amount = 1; amount < n + 1; amount++) {
      if (denom <= amount) {
        array[amount] += array[amount - denom];
      }
    }
  }
  return array[n];
}
