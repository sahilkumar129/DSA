/**
 * @param {number[]} houses
 * @param {number[][]} cost
 * @param {number} m
 * @param {number} n
 * @param {number} target
 * @return {number}
 */
var minCost = function (houses, cost, m, n, target) {
  let dp = Array.from(Array(m), () =>
    Array.from(Array(n), () => Array.from(Array(target + 1), () => Infinity))
  );
  if (houses[m - 1] !== 0) dp[m - 1][houses[m - 1] - 1][1] = 0;
  else for (let i = 0; i < n; i++) dp[m - 1][i][1] = cost[m - 1][i];
  for (let i = m - 2; i >= 0; i--) {
    for (let k = target; k > 0; k--) {
      for (let j = 0; j < n; j++) {
        if (houses[i] !== 0) {
          if (j === houses[i] - 1)
            dp[i][houses[i] - 1][k] = Math.min(dp[i][houses[i] - 1][k], dp[i + 1][j][k]);
          else dp[i][houses[i] - 1][k] = Math.min(dp[i][houses[i] - 1][k], dp[i + 1][j][k - 1]);
        } else {
          for (let p = 0; p < n; p++) {
            if (j === p) dp[i][j][k] = Math.min(dp[i][j][k], cost[i][j] + dp[i + 1][p][k]);
            else dp[i][j][k] = Math.min(dp[i][j][k], cost[i][j] + dp[i + 1][p][k - 1]);
          }
        }
      }
    }
  }
  let ans = Infinity;
  for (let i = 0; i < n; i++) ans = Math.min(ans, dp[0][i][target]);
  return ans === Infinity ? -1 : ans;
};

const houses = [0, 0, 0, 0, 0],
  cost = [
    [1, 10],
    [10, 1],
    [10, 1],
    [1, 10],
    [5, 1],
  ],
  m = 5,
  n = 2,
  target = 3;
console.log(minCost(houses, cost, m, n, target));
