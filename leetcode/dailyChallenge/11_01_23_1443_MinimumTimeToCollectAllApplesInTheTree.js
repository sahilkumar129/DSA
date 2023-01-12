/**
 * @param {number} n
 * @param {number[][]} edges
 * @param {boolean[]} hasApple
 * @return {number}
 */
var minTime = function (n, edges, hasApple) {
  let adjList = new Map();
  for (const edge of edges) {
    adjList.set(edge[0], [...(adjList.get(edge[0]) ?? []), edge[1]]);
    adjList.set(edge[1], [...(adjList.get(edge[1]) ?? []), edge[0]]);
  }
  return dfs(0, adjList, hasApple, -1);
};

var dfs = function (ind, adjList, hasApple, parent) {
  let time = 0;
  for (const val of adjList.get(ind)) {
    if (val !== parent) {
      time += dfs(val, adjList, hasApple, ind);
    }
  }
  if (ind !== 0 && (hasApple[ind] || time > 0)) time += 2;
  return time;
};

const n = 7,
  edges = [
    [0, 1],
    [0, 2],
    [1, 4],
    [1, 5],
    [2, 3],
    [2, 6],
  ],
  hasApple = [false, false, true, false, true, true, false];
console.log(minTime(n, edges, hasApple));
