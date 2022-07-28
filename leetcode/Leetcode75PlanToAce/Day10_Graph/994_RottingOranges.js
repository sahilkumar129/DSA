/**
 * @param {number[][]} grid
 * @return {number}
 */
var orangesRotting = function (grid) {
  const m = grid.length,
    n = grid[0].length,
    queue = new Queue();
  for (let i = 0; i < m; i++)
    for (let j = 0; j < n; j++) if (grid[i][j] === 2) queue.enqueue([i, j]);
  let minutes = -1;
  while (queue.size()) {
    let size = queue.size();
    minutes++;
    while (size--) {
      const [x, y] = queue.dequeue();
      for (const [a, b] of [
        [-1, 0],
        [1, 0],
        [0, -1],
        [0, 1],
      ]) {
        const [xx, yy] = [x + a, y + b];
        if (xx < 0 || yy < 0 || xx >= m || yy >= n || grid[xx][yy] !== 1) continue;
        queue.enqueue([xx, yy]);
        grid[xx][yy] = 2;
      }
    }
  }
  return allRotten(grid) ? Math.max(0, minutes) : -1;
};

var allRotten = function (grid) {
  const m = grid.length,
    n = grid[0].length;
  for (let i = 0; i < m; i++) for (let j = 0; j < n; j++) if (grid[i][j] === 1) return false;
  return true;
};

const grid = [
  [2, 1, 1],
  [1, 1, 0],
  [0, 1, 1],
];
console.log(orangesRotting(grid));
