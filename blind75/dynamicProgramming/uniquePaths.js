/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 * Recursive
 */
// var uniquePaths = function (m, n) {
//   const dp = [];
//   for (let i = 0; i < m; i++) {
//     let row = [];
//     for (let j = 0; j < n; j++) row.push(-1);
//     dp.push(row);
//   }
//   const dfs = function (i, j) {
//     if (i >= m || j >= n) return 0;
//     if (i == m - 1 && j == n - 1) return 1;
//     if (dp[i][j] != -1) return dp[i][j];
//     dp[i][j] = dfs(i + 1, j);
//     dp[i][j] += dfs(i, j + 1);
//     return dp[i][j];
//   };
//   return dfs(0, 0);
// };

// Bottom Up
var uniquePaths = function (m, n) {
  const dp = [];
  for (let i = 0; i < m; i++) {
    let row = [];
    for (let j = 0; j < n; j++) row.push(0);
    dp.push(row);
  }
  for (let i = 0; i < m; i++) dp[i][n - 1] = 1;
  for (let i = 0; i < n; i++) dp[m - 1][i] = 1;
  for (let i = m - 2; i >= 0; i--) {
    for (let j = n - 2; j >= 0; j--) {
      dp[i][j] = dp[i + 1][j] + dp[i][j + 1];
    }
  }
  return dp[0][0];
};

const m = 3,
  n = 7;
console.log(uniquePaths(m, n));
