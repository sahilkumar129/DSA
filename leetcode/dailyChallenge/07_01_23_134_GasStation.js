/**
 * @param {number[]} gas
 * @param {number[]} cost
 * @return {number}
 */
var canCompleteCircuit = function (gas, cost) {
  let totalGas = 0,
    totalCost = 0,
    currGas = 0,
    start = 0;
  for (let i = 0; i < gas.length; i++) {
    totalGas += gas[i];
    totalCost += cost[i];
    currGas += gas[i] - cost[i];
    if (currGas < 0) {
      start = i + 1;
      currGas = 0;
    }
  }
  if (totalGas < totalCost) return -1;
  return start;
};

const gas = [1, 2, 3, 4, 5],
  cost = [3, 4, 5, 1, 2];
console.log(canCompleteCircuit(gas, cost));
