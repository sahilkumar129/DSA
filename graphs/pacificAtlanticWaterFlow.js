/**
 * @param {number[][]} heights
 * @return {number[][]}
 * O(4^(N*M))
 */
// var pacificAtlantic = function (heights) {
//   const visited = new Set(),
//     dpFlowPossible = new Map(),
//     ans = [];
//   const rainWaterCanFlow = function (i, j, prev, flowPossible) {
//     if (flowPossible.atlantic && flowPossible.pacific) return flowPossible;
//     if (i < 0 || j < 0) return { pacific: true, atlantic: false };
//     if (i >= heights.length || j >= heights[i].length) return { pacific: false, atlantic: true };
//     if (visited.has(`${i}-${j}`) || heights[i][j] > prev)
//       return { pacific: false, atlantic: false };
//     if (dpFlowPossible.has(`${i}-${j}`)) return dpFlowPossible.get(`${i}-${j}`);
//     visited.add(`${i}-${j}`);
//     flowPossible = isFlowPossible(
//       flowPossible,
//       rainWaterCanFlow(i - 1, j, heights[i][j], flowPossible)
//     );
//     flowPossible = isFlowPossible(
//       flowPossible,
//       rainWaterCanFlow(i + 1, j, heights[i][j], flowPossible)
//     );
//     flowPossible = isFlowPossible(
//       flowPossible,
//       rainWaterCanFlow(i, j - 1, heights[i][j], flowPossible)
//     );
//     flowPossible = isFlowPossible(
//       flowPossible,
//       rainWaterCanFlow(i, j + 1, heights[i][j], flowPossible)
//     );
//     visited.delete(`${i}-${j}`);
//     dpFlowPossible.set(`${i}-${j}`, flowPossible);
//     return flowPossible;
//   };
//   for (let i = 0; i < heights.length; i++) {
//     for (let j = 0; j < heights[i].length; j++)
//       if (
//         Object.values(
//           rainWaterCanFlow(i, j, Number.MAX_SAFE_INTEGER, {
//             pacific: false,
//             atlantic: false,
//           })
//         ).reduce((a, b) => a && b)
//       )
//         ans.push([i, j]);
//   }
//   return ans;
// };

// var isFlowPossible = function (flowPossible, flowPossibleFromPoint) {
//   return {
//     atlantic: flowPossible.atlantic || flowPossibleFromPoint.atlantic,
//     pacific: flowPossible.pacific || flowPossibleFromPoint.pacific,
//   };
// };

// O(N*M)
var pacificAtlantic = function (heights) {
  const pacific = new Set(),
    atlantic = new Set();
  for (let row = 0; row < heights.length; row++) {
    dfs(row, 0, 0, heights, pacific);
    dfs(row, heights[0].length - 1, 0, heights, atlantic);
  }
  for (let col = 0; col < heights[0].length; col++) {
    dfs(0, col, 0, heights, pacific);
    dfs(heights.length - 1, col, 0, heights, atlantic);
  }
  const ans = findAns(pacific, atlantic);
  return ans;
};

var dfs = function (row, col, prev, heights, ocean) {
  if (
    row < 0 ||
    col < 0 ||
    row >= heights.length ||
    col >= heights[0].length ||
    ocean.has(`${row}-${col}`) ||
    heights[row][col] < prev
  )
    return;
  ocean.add(`${row}-${col}`);
  dfs(row + 1, col, heights[row][col], heights, ocean);
  dfs(row - 1, col, heights[row][col], heights, ocean);
  dfs(row, col + 1, heights[row][col], heights, ocean);
  dfs(row, col - 1, heights[row][col], heights, ocean);
};

var findAns = function (pacific, atlantic) {
  const ans = [];
  for (const value of pacific.values())
    if (atlantic.has(value)) ans.push(value.split("-").map((x) => parseInt(x)));
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
