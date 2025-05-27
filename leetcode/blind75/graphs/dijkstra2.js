import { PriorityQueue } from "@datastructures-js/priority-queue";

var dijkstra = function (source, adjList) {
  const distance = new Array(adjList.length).fill(Infinity);
  distance[source] = 0;
  const queue = new PriorityQueue((a, b) => a.w - b.w);
  const visited = new Set();
  queue.enqueue({ n: source, w: 0 });
  while (!queue.isEmpty()) {
    const curr = queue.dequeue();
    if (visited.has(curr.n)) continue;
    visited.add(curr.n);
    console.log(source, curr);
    for (const nei of adjList[curr.n]) {
      distance[nei.node] = Math.min(distance[nei.node], distance[curr.n] + nei.weight);
      queue.enqueue({ n: nei.node, w: distance[nei.node] });
    }
  }
  return distance;
};

const adjList = [
  [
    { node: 1, weight: 5 },
    { node: 3, weight: 9 },
    { node: 4, weight: 1 },
  ],
  [
    { node: 0, weight: 5 },
    { node: 2, weight: 2 },
  ],
  [
    { node: 1, weight: 2 },
    { node: 3, weight: 7 },
  ],
  [
    { node: 0, weight: 9 },
    { node: 2, weight: 7 },
    { node: 4, weight: 2 },
  ],
  [
    { node: 0, weight: 1 },
    { node: 3, weight: 2 },
  ],
];

console.log(dijkstra(0, adjList));
