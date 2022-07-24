/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function (grid) {
  let numIslands = 0;
  const visited = new Set();
  const dfs = function (i, j) {
    if (
      i < 0 ||
      i >= grid.length ||
      j < 0 ||
      j >= grid[0].length ||
      grid[i][j] == 0 ||
      visited.has(`${i}-${j}`)
    )
      return;
    visited.add(`${i}-${j}`);
    dfs(i + 1, j);
    dfs(i - 1, j);
    dfs(i, j + 1);
    dfs(i, j - 1);
  };
  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[i].length; j++) {
      if (!visited.has(`${i}-${j}`) && grid[i][j] == 1) {
        dfs(i, j);
        numIslands++;
      }
    }
  }
  return numIslands;
};

const grid = [
  ["1", "1", "1", "1", "0"],
  ["1", "1", "0", "1", "0"],
  ["1", "1", "0", "0", "0"],
  ["0", "0", "0", "0", "0"],
];

console.log(numIslands(grid));
