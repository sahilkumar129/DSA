/**
 * @param {number[][]} bombs
 * @return {number}
 */
var maximumDetonation = function (bombs) {
  const graph = createGraph(bombs);
  let ans = 0;
  for (let i = 0; i < bombs.length; i++) {
    const visited = new Set();
    dfs(i, graph, visited);
    ans = Math.max(ans, visited.size);
  }
  return ans;
};

var dfs = function (key, graph, visited) {
  if (visited.has(key)) return;
  visited.add(key);
  for (const n of graph[key]) {
    dfs(n, graph, visited);
  }
};

var createGraph = function (bombs) {
  const graph = new Array(bombs.length).fill(null).map((_) => []);
  for (let i = 0; i < bombs.length; i++) {
    for (let j = i + 1; j < bombs.length; j++) {
      if (bombsInRange(bombs[i], bombs[j])) graph[i].push(j);
      if (bombsInRange(bombs[j], bombs[i])) graph[j].push(i);
    }
  }
  return graph;
};

var bombsInRange = function (b1, b2) {
  const xDiff = b2[0] - b1[0],
    yDiff = b2[1] - b1[1],
    centerDiff = Math.sqrt(xDiff * xDiff + yDiff * yDiff);
  if (b1[2] >= centerDiff) return true;
  return false;
};

const bombs = [
  [1, 2, 3],
  [2, 3, 1],
  [3, 4, 2],
  [4, 5, 3],
  [5, 6, 4],
];
console.log(maximumDetonation(bombs));
