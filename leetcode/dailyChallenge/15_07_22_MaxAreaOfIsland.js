/**
 * @param {number[][]} grid
 * @return {number}
 */
var maxAreaOfIsland = function (grid) {
  let ans = 0;
  const visited = new Set();
  const getArea = function (i, j) {
    if (
      i < 0 ||
      j < 0 ||
      i >= grid.length ||
      j >= grid[i].length ||
      grid[i][j] === 0 ||
      visited.has(`${i}-${j}`)
    )
      return 0;
    visited.add(`${i}-${j}`);
    return getArea(i - 1, j) + getArea(i + 1, j) + getArea(i, j - 1) + getArea(i, j + 1) + 1;
  };
  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[i].length; j++) {
      if (grid[i][j] === 1 && !visited.has(`${i}-${j}`)) ans = Math.max(ans, getArea(i, j));
    }
  }
  return ans;
};

const grid = [
  [0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0],
  [0, 1, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 1, 0, 0, 1, 1, 0, 0, 1, 0, 1, 0, 0],
  [0, 1, 0, 0, 1, 1, 0, 0, 1, 1, 1, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0],
];
console.log(maxAreaOfIsland(grid));
