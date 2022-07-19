/**
 * @param {number[][]} grid
 * @return {number[]}
 */
var findBall = function (grid) {
  const ans = [],
    m = grid.length,
    n = grid[0].length;
  for (let i = 0; i < n; i++) {
    let col = i;
    for (let j = 0; j < m; j++) {
      if (grid[j][col] === 1) {
        if (col === n - 1 || grid[j][col + 1] === -1) {
          col = -1;
          break;
        }
      } else {
        if (col === 0 || grid[j][col - 1] === 1) {
          col = -1;
          break;
        }
      }
      col += grid[j][col];
    }
    ans.push(col);
  }
  return ans;
};

const grid = [
  [1, 1, 1, -1, -1],
  [1, 1, 1, -1, -1],
  [-1, -1, -1, 1, 1],
  [1, 1, 1, 1, -1],
  [-1, -1, -1, -1, -1],
];
console.log(findBall(grid));
