// Used to get Minimum/Maximum Spanning Tree
var kruskal = function (n, edges) {
  edges.sort((a, b) => b[2] - a[2]);
  const graph = new Graph(n);
  for (const edge of edges) {
    if (graph.union(edge[0], edge[1])) graph.edges.push(edge);
  }
  console.log(graph.edges);
  return graph.edges.reduce((total, edge) => total + edge[2], 0);
};

var Graph = function (n) {
  this.edges = [];
  this.parents = new Array(n + 1).fill(0).map((v, ind) => ind);
  this.ranks = new Array(n + 1).fill(1);
};

Graph.prototype.union = function (a, b) {
  const p1 = this.find(a);
  const p2 = this.find(b);
  if (p1 == p2) return false;
  if (this.ranks[p1] > this.ranks[p2]) {
    this.parents[p2] = p1;
    this.ranks[p1] += this.ranks[p2];
  } else {
    this.parents[p1] = p2;
    this.ranks[p2] += this.ranks[p1];
  }
  return true;
};

Graph.prototype.find = function (a) {
  while (a != this.parents[a]) a = this.parents[a];
  return a;
};

const edges = [
  [1, 2, 3],
  [1, 5, 5],
  [2, 3, 5],
  [2, 5, 6],
  [3, 4, 9],
  [3, 6, 3],
  [4, 6, 7],
  [5, 6, 2],
];

console.log(kruskal(6, edges));
