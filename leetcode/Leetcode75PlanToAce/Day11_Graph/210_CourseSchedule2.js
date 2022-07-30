/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {number[]}
 */
var findOrder = function (numCourses, prerequisites) {
  const adjList = createAdjList(numCourses, prerequisites),
    visited = new Map();
  const ans = [];
  try {
    for (let i = 0; i < numCourses; i++) ans.push(...topologicalSort(i, adjList, visited));
  } catch (error) {
    return [];
  }
  return ans;
};

var createAdjList = function (numCourses, prerequisites) {
  const adjList = Array.from(Array(numCourses), () => []);
  for (const [x, y] of prerequisites) adjList[x].push(y);
  return adjList;
};

var topologicalSort = function (course, adjList, visited) {
  if (visited.get(course) === false) throw new Error("Cycle found");
  if (visited.get(course) === true) return [];
  visited.set(course, false); // in path
  let order = [];
  for (const nei of adjList[course]) order.push(...topologicalSort(nei, adjList, visited));
  order.push(course);
  visited.set(course, true); // completed
  return order;
};

const numCourses = 4,
  prerequisites = [
    [1, 0],
    [2, 0],
    [3, 1],
    [3, 2],
  ];
console.log(findOrder(numCourses, prerequisites));
