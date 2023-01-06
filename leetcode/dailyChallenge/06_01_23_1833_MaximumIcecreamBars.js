/**
 * @param {number[]} costs
 * @param {number} coins
 * @return {number}
 * Time: O(nlogn), Space: O(1)
 */
var maxIceCream = function (costs, coins) {
  costs.sort((a, b) => a - b);
  let i = 0,
    ans = 0;
  while (i < costs.length && coins > 0) {
    if (costs[i] <= coins) {
      ans++;
      coins -= costs[i++];
    } else break;
  }
  return ans;
};

/**
 * Time: O(n), Space: O(10^5)
 */
var maxIceCreamOptimized = function (costs, coins) {
  let ans = 0,
    costsArr = new Array(100001).fill(0);
  for (const cost of costs) costsArr[cost] += 1;
  for (let i = 0; i < costsArr.length && coins > 0; i++) {
    if (costsArr[i] === 0) continue;
    ans += Math.floor(Math.min(coins, i * costsArr[i]) / i);
    coins -= Math.min(coins, i * costsArr[i]);
  }
  return ans;
};

const costs = [1, 3, 2, 4, 1],
  coins = 7;
console.log(maxIceCreamOptimized(costs, coins));
