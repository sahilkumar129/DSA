/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 */
var canFinish = function (numCourses, prerequisites) {
  const path = new Set(),
    visited = new Set(),
    adjList = createAdjList(prerequisites);

  const dfs = function (n) {
    if (path.has(n)) return false;
    if (visited.has(n)) return true;
    path.add(n);
    for (const value of adjList.get(n) ?? []) {
      if (!dfs(value)) return false;
    }
    path.delete(n);
    visited.add(n);
    return true;
  };
  for (let i = 0; i < numCourses; i++) if (!dfs(i)) return false;
  return true;
};

var createAdjList = function (arr) {
  const adjList = new Map();
  arr.forEach((a) => {
    const currVal = adjList.get(a[0]) ?? [];
    adjList.set(a[0], [...currVal, a[1]]);
  });
  return adjList;
};

const numCourses = 20,
  prerequisites = [
    [0, 10],
    [3, 18],
    [5, 5],
    [6, 11],
    [11, 14],
    [13, 1],
    [15, 1],
    [17, 4],
  ];
console.log(canFinish(numCourses, prerequisites));
