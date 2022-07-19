// var travellingSalesmanRec = function (source, graph) {
//   let ans = Number.MAX_VALUE,
//     bestPath = [];
//   const visited = new Set();
//   const dfs = function (i, curr, path) {
//     if (visited.has(i)) return;
//     if (visited.size + 1 == graph.length) {
//       ans = Math.min(ans, curr + graph[i][source]);
//       bestPath = [...path, [i, source]];
//       return;
//     }
//     visited.add(i);
//     for (let j = 0; j < graph.length; j++)
//       if (graph[i][j]) dfs(j, curr + graph[i][j], [...path, [i, j]]);
//     visited.delete(i);
//   };
//   dfs(source, 0, []);
//   console.log(bestPath);
//   return ans;
// };

var travellingSalesman = function (source, graph) {
  // dp[S][i] represents the cost of the minimum cost path visiting all subsets{U-S} starting at i and ending at source
  let dp = new Array(1 << graph.length).fill([]);
  dp = dp.map((d) => new Array(graph.length).fill(-1));
  return helper(1 << source, source, source, graph, dp, graph.length, (1 << graph.length) - 1);
};

var helper = function (mask, source, pos, graph, dp, n, visited) {
  if (mask == visited) return graph[pos][source];
  if (dp[mask][pos] != -1) return dp[mask][pos];

  let ans = Number.MAX_VALUE;
  for (let city = 0; city < n; city++) {
    if ((mask & (1 << city)) == 0) {
      let cost = graph[pos][city] + helper(mask | (1 << city), source, city, graph, dp, n, visited);
      ans = Math.min(ans, cost);
    }
  }
  dp[mask][pos] = ans;
  return ans;
};

const graph = [
    [0, 10, 15, 20],
    [10, 0, 35, 25],
    [15, 35, 0, 30],
    [20, 25, 30, 0],
  ],
  source = 0;

console.log(travellingSalesman(source, graph));
