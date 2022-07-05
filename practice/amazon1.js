const Queue = require("queue-fifo");

/*
You have to implement a part of query planner in a query execution engine, 
where you will be given interdependence between set of queries(queries are numbered from 1 to N) amongst themselves. 
If single query takes 1 unit of time, your task is to find out minimum possible time to execute all queries 
and min degree of parallelization required to achieve that time.

Ex:
Input:

6

1 → 2,3,5
2 → 4
3 → 4,5
6 -> 1


Output
Min Time: 3 units
Degree of parallelization: 2
*/

// var minTime = function (N, queries) {
//   let maxDepth = 0,
//     visited = new Array(N + 1).fill(0); //0 before visit, -1 during exploration,  max depth from that node(after exploration)

//   const dfs = function (q) {
//     if (!queries.has(q)) {
//       return 1;
//     }
//     if (visited[q] === -1) throw new Error("Cycle exists!");
//     if (visited[q] !== 0) return visited[q];
//     visited[q] = -1;
//     let curr = 1;
//     for (const value of queries.get(q)) {
//       curr = Math.max(curr, 1 + dfs(value));
//     }
//     visited[q] = curr;
//     return visited[q];
//   };

//   for (let i = 1; i <= N; i++) maxDepth = Math.max(maxDepth, dfs(i));
//   return maxDepth;
// };

var getMinTimeAndParallelization = function (N, queries) {
  let minTime = 1,
    parallelization = 1,
    inDegree = new Array(N + 1).fill(0),
    q = new Queue();

  // Initialize inDegree
  for (let i = 1; i <= N; i++) {
    if (!queries.has(i)) continue;
    for (const j of queries.get(i)) inDegree[j]++;
  }

  // Initialize q
  for (let i = 1; i <= N; i++) {
    if (inDegree[i] === 0) q.enqueue(i);
  }

  while (q.size()) {
    parallelization = Math.max(parallelization, q.size());
    let size = q.size(),
      inc = false;
    while (size--) {
      const curr = q.dequeue();
      if (!queries.has(curr)) continue;
      for (const adj of queries.get(curr)) {
        inDegree[adj]--;
        if (inDegree[adj] === 0) {
          minTime = inc ? minTime : minTime + 1;
          inc = true;
          q.enqueue(adj);
        }
      }
    }
  }
  return [minTime, parallelization];
};

const N = 6,
  queries = new Map([
    [1, [2, 3, 5]],
    [2, [4]],
    [3, [4, 5]],
    [6, [1]],
  ]);
console.log(getMinTimeAndParallelization(N, queries));
