/**
 * @param {number[][]} heights
 * @return {number[][]}
 */
var pacificAtlantic = function (heights) {
  let pacific = new Set(),
    atlantic = new Set();
  const M = heights.length,
    N = heights[0].length;
  for (let i = 0; i < M; i++) {
    addOcean(i, 0, heights, pacific, heights[i][0]);
    addOcean(i, N - 1, heights, atlantic, heights[i][N - 1]);
  }
  for (let i = 0; i < N; i++) {
    addOcean(0, i, heights, pacific, heights[0][i]);
    addOcean(M - 1, i, heights, atlantic, heights[M - 1][i]);
  }
  const ans = getIntersectionCount(pacific, atlantic);
  return ans;
};

var addOcean = function (i, j, heights, ocean, prev) {
  if (
    i < 0 ||
    j < 0 ||
    i >= heights.length ||
    j >= heights[0].length ||
    ocean.has(`${i}-${j}`) ||
    heights[i][j] < prev
  )
    return;
  ocean.add(`${i}-${j}`);
  addOcean(i - 1, j, heights, ocean, heights[i][j]);
  addOcean(i + 1, j, heights, ocean, heights[i][j]);
  addOcean(i, j - 1, heights, ocean, heights[i][j]);
  addOcean(i, j + 1, heights, ocean, heights[i][j]);
};

var getIntersectionCount = function (pacific, atlantic) {
  let ans = [];
  pacific.forEach((point) => {
    if (atlantic.has(point)) ans.push(point.split("-").map((p) => parseInt(p)));
  });
  return ans;
};

const heights = [
  [1, 2, 2, 3, 5],
  [3, 2, 3, 4, 4],
  [2, 4, 5, 3, 1],
  [6, 7, 1, 4, 5],
  [5, 1, 1, 2, 4],
];
console.log(pacificAtlantic(heights));
