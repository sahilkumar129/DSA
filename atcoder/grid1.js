var grid1 = function (grid) {
  const dp = initializeDp(grid);
  const [R, C] = [grid.length, grid[0].length];
  dp[R][C - 1] = 1;
  for (let i = R - 1; i >= 0; i--) {
    for (let j = C - 1; j >= 0; j--) {
      dp[i][j] = grid[i][j] === "#" ? 0 : (dp[i + 1][j] + dp[i][j + 1]) % (Math.pow(10, 9) + 7);
    }
  }
  return dp[0][0];
};

var initializeDp = function (grid) {
  const dp = [];
  for (let i = 0; i <= grid.length; i++) {
    const row = [];
    for (let j = 0; j <= grid[0].length; j++) {
      row.push(0);
    }
    dp.push(row);
  }
  return dp;
};

console.log(
  grid1([
    [".", ".", "#", ".", "."],
    [".", ".", ".", ".", "."],
    ["#", ".", ".", ".", "#"],
    [".", ".", ".", ".", "."],
    [".", ".", "#", ".", "."],
  ])
);
