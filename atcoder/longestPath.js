var longestPath = function (N, edges) {
  let ans = 0;
  const dp = new Array(N + 1).fill(-1),
    adjacencyList = createAdjList(N, edges);
  console.log(adjacencyList);
  const dfs = function (i) {
    if (dp[i] != -1) return dp[i];
    adjacencyList.get(i).forEach((v) => {
      dp[i] = Math.max(dp[i], dfs(v) + 1);
    });
    return dp[i] == -1 ? 0 : dp[i];
  };
  for (let i = 1; i <= N; i++) {
    ans = Math.max(ans, dfs(i));
  }
  return ans;
};

var createAdjList = function (N, edges) {
  const adjList = new Map(new Array(N + 1).fill(0).map((v, i) => [i, []]));
  edges.forEach((edge) => {
    adjList.set(edge[0], [...adjList.get(edge[0]), edge[1]]);
  });
  return adjList;
};

console.log(
  longestPath(4, [
    [1, 2],
    [1, 3],
    [3, 2],
    [2, 4],
    [3, 4],
  ])
);
