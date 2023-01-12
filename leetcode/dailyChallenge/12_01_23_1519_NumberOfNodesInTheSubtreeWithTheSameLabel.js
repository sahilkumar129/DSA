/**
 * @param {number} n
 * @param {number[][]} edges
 * @param {string} labels
 * @return {number[]}
 */
var countSubTrees = function (n, edges, labels) {
  const adjList = createAdjList(edges);
  const output = new Array(n).fill(1);
  countSubTreesHelper(0, adjList, labels, output, -1);
  return output;
};

var createAdjList = function (edges) {
  const adjList = new Map();
  for (const edge of edges) {
    adjList.set(edge[0], [...(adjList.get(edge[0]) ?? []), edge[1]]);
    adjList.set(edge[1], [...(adjList.get(edge[1]) ?? []), edge[0]]);
  }
  return adjList;
};

var countSubTreesHelper = function (ind, adjList, labels, output, parent) {
  const map = new Map();
  map.set(labels[ind], 1);
  for (const val of adjList.get(ind) ?? []) {
    if (val !== parent) {
      const childMap = countSubTreesHelper(val, adjList, labels, output, ind);
      for (const [key, value] of childMap) map.set(key, (map.get(key) ?? 0) + value);
    }
  }
  output[ind] = map.get(labels[ind]);
  return map;
};

const n = 4,
  edges = [
    [0, 1],
    [1, 2],
    [0, 3],
  ],
  labels = "bbbb";
console.log(countSubTrees(n, edges, labels));
