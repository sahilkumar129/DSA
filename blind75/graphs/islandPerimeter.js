/**
 * @param {number[][]} grid
 * @return {number}
 */
var islandPerimeter = function (grid) {
  const visited = new Set();
  const dfs = function (i, j) {
    if (i < 0 || i >= grid.length || j < 0 || j >= grid[0].length || grid[i][j] === 0) return 1;
    if (visited.has(`${i}-${j}`)) return 0;
    visited.add(`${i}-${j}`);
    let per = 0;
    per += dfs(i + 1, j);
    per += dfs(i - 1, j);
    per += dfs(i, j + 1);
    per += dfs(i, j - 1);
    return per;
  };
  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[i].length; j++) {
      if (grid[i][j] === 1) {
        return dfs(i, j);
      }
    }
  }
  return 0;
};

const grid = [
  [0, 1, 0, 0],
  [1, 1, 1, 0],
  [0, 1, 0, 0],
  [1, 1, 0, 0],
];
console.log(islandPerimeter(grid));
