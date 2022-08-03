/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var uniquePaths = function (m, n) {
  const dp = Array.from(Array(m + 1), () => Array.from(Array(n + 1), () => 0));
  for (let i = m - 1; i >= 0; i--) dp[i][n - 1] = 1;
  for (let j = n - 1; j >= 0; j--) dp[m - 1][j] = 1;
  for (let i = m - 2; i >= 0; i--) {
    for (let j = n - 2; j >= 0; j--) dp[i][j] = dp[i + 1][j] + dp[i][j + 1];
  }
  return dp[0][0];
};

const m = 3,
  n = 7;
console.log(uniquePaths(m, n));
