/**
 * @param {number[][]} grid
 * @return {number}
 */
var maxIncreaseKeepingSkyline = function (grid) {
  const n = grid.length,
    maxRow = new Array(n).fill(0),
    maxCol = new Array(n).fill(0);
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      maxRow[i] = Math.max(maxRow[i], grid[i][j]);
      maxCol[j] = Math.max(maxCol[j], grid[i][j]);
    }
  }
  let ans = 0;
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      ans += Math.max(0, Math.min(maxRow[i], maxCol[j]) - grid[i][j]);
    }
  }
  return ans;
};

const grid = [
  [3, 0, 8, 4],
  [2, 4, 5, 7],
  [9, 2, 6, 3],
  [0, 3, 1, 0],
];
console.log(maxIncreaseKeepingSkyline(grid));
