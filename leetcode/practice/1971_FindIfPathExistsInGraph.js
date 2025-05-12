/**
 * @param {number} n
 * @param {number[][]} edges
 * @param {number} source
 * @param {number} destination
 * @return {boolean}
 */
var validPath = function (n, edges, source, destination) {
  // Solution 1: DFS
  // const adjList = getAdjList(n, edges);
  // return dfs(source, destination, adjList, new Set([source]));

  // Solution 2: Check if all belong to same component
  // Union Find

  const graph = new UnionFind(n);
  for (const edge of edges) graph.union(edge);

  return graph.find(source) == graph.find(destination);
};

var UnionFind = function (n) {
  this.parents = new Array(n).fill(0).map((_, i) => i);
  this.ranks = new Array(n).fill(1);
};

UnionFind.prototype.union = function ([a, b]) {
  const [p1, p2] = [this.find(a), this.find(b)];
  if (p1 == p2) return;
  if (this.ranks[p1] >= this.ranks[p2]) {
    this.parents[p2] = p1;
    this.ranks[p1] += this.ranks[p2];
  } else {
    this.parents[p1] = p2;
    this.ranks[p2] += this.ranks[p1];
  }
};

UnionFind.prototype.find = function (v) {
  while (v != this.parents[this.parents[v]]) v = this.parents[v];
  return v;
};

// var getAdjList = function(n, edges) {
//     const adjList = new Array(n).fill(0).map(_ => []);
//     for(const [a,b] of edges) {
//         adjList[a].push(b);
//         adjList[b].push(a);
//     }
//     return adjList;
// }

// var dfs = function(source, dest, adjList, visitedSet) {
//     if(source == dest) return true;
//     for(const next of adjList[source]) {
//         if(visitedSet.has(next)) continue;
//         visitedSet.add(next);
//         if(dfs(next, dest, adjList, visitedSet))
//             return true;
//         visitedSet.delete(next);
//     }
//     return false;
// }

const n = 3,
  edges = [
    [0, 1],
    [1, 2],
    [2, 0],
  ],
  source = 0,
  destination = 2;
console.log(validPath(n, edges, source, destination));
