/**
 * @param {number} m
 * @param {number} n
 * @param {number} maxMove
 * @param {number} startRow
 * @param {number} startColumn
 * @return {number}
 */

var findPaths = function (m, n, maxMove, startRow, startColumn) {
  const dp = Array.from(Array(m), () =>
    Array.from(Array(n), () => Array.from(Array(maxMove + 1), () => -1))
  );
  const dfs = function (i, j, move) {
    if (i < 0 || j < 0 || i >= m || j >= n) return 1;
    if (move <= 0) return 0;
    if (dp[i][j][move] !== -1) return dp[i][j][move];
    dp[i][j][move] =
      (dfs(i - 1, j, move - 1) +
        dfs(i + 1, j, move - 1) +
        dfs(i, j - 1, move - 1) +
        dfs(i, j + 1, move - 1)) %
      1000000007;
    return dp[i][j][move];
  };
  return dfs(startRow, startColumn, maxMove) % 1000000007;
};

const m = 2,
  n = 2,
  maxMove = 2,
  startRow = 0,
  startColumn = 0;
console.log(findPaths(m, n, maxMove, startRow, startColumn));
