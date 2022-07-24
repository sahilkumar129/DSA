var validTree = function (n, edges) {
  const visit = new Set();
  const adj = new Map();
  for (let edge of edges) {
    adj.set(edge[0], [...(adj.get(edge[0]) ?? []), edge[1]]);
    adj.set(edge[1], [...(adj.get(edge[1]) ?? []), edge[0]]);
  }
  const dfs = function (i, prev) {
    if (visit.has(i)) return false;
    visit.add(i);
    for (const nei of adj.get(i)) {
      if (nei == prev) continue;
      if (!dfs(nei, i)) return false;
    }
    return true;
  };
  return dfs(0, -1) && visit.size == n;
};

const n = 5,
  edges = [
    [0, 1],
    [0, 2],
    [0, 3],
    [1, 4],
  ];
console.log(validTree(n, edges));
