/**
 * @param {number[]} vals
 * @param {number[][]} edges
 * @return {number}
 * O(n2)
 */
var numberOfGoodPaths = function (vals, edges) {
  let goodPaths = 0;
  const adjList = createAdjList(edges);
  const dfs = function (start, ind, parent) {
    if (vals[start] === vals[ind]) goodPaths += 1;
    for (const val of adjList[ind]) {
      if (val !== parent && vals[ind] <= vals[start]) dfs(start, val, ind);
    }
  };
  for (let i = 0; i < vals.length; i++) dfs(i, i, -1);
  return goodPaths > 0 ? goodPaths - (goodPaths - vals.length) / 2 : 0;
};

// O(nlog(n))
var numberOfGoodPaths2 = function (vals, edges) {
  const adjList = createAdjList(vals.length, edges);
  const valsToNodes = getValsToNode(vals);
  const uf = new UnionFind(vals.length);
  let goodPaths = 0;
  for (const [_, nodes] of valsToNodes) {
    nodes.forEach((node) => {
      for (const nei of adjList[node]) if (vals[nei] <= vals[node]) uf.union(node, nei);
    });
    const map = new Map();
    nodes.forEach((node) => {
      const group = uf.find(node);
      map.set(group, (map.get(group) ?? 0) + 1);
    });
    for (const [_, size] of map) goodPaths += (size * (size + 1)) / 2;
  }
  return goodPaths;
};

var getValsToNode = function (vals) {
  const valsToNodes = new Map();
  for (let i = 0; i < vals.length; i++)
    valsToNodes.set(vals[i], [...(valsToNodes.get(vals[i]) ?? []), i]);
  return valsToNodes;
};

var UnionFind = function (size) {
  this.parents = new Array(size).fill(0).map((_, i) => i);
  this.ranks = new Array(size).fill(0);
};

UnionFind.prototype.find = function (x) {
  if (this.parents[x] !== x) this.parents[x] = this.find(this.parents[x]);
  return this.parents[x];
};

UnionFind.prototype.union = function (x, y) {
  const [p1, p2] = [this.find(x), this.find(y)];
  if (p1 === p2) return;
  if (this.ranks[p1] > this.ranks[p2]) {
    this.parents[p2] = p1;
  } else if (this.ranks[p1] < this.ranks[p2]) {
    this.parents[p1] = p2;
  } else {
    this.parents[p2] = p1;
    this.ranks[p1]++;
  }
};

var createAdjList = function (n, edges) {
  const adjList = new Array(n).fill(0).map((_) => []);
  for (const [v1, v2] of edges) {
    adjList[v1].push(v2);
    adjList[v2].push(v1);
  }
  return adjList;
};

const vals = [2, 5, 5, 1, 5, 2, 3, 5, 1, 5],
  edges = [
    [0, 1],
    [2, 1],
    [3, 2],
    [3, 4],
    [3, 5],
    [5, 6],
    [1, 7],
    [8, 4],
    [9, 7],
  ];

console.log(numberOfGoodPaths2(vals, edges));
