var bellmanFord = function (source, n, edges) {
  const distance = createDistanceArray(source, n);
  for (let i = 1; i < n; i++) {
    for (let edge of edges) {
      const { source, target, weight } = edge;
      distance[target] = Math.min(distance[target], distance[source] + weight);
    }
  }
  return distance;
};

var createDistanceArray = function (source, n) {
  const distance = new Map();
  for (let i = 0; i < n; i++) {
    if (i + 1 == source) distance[source] = 0;
    else distance[i + 1] = 1000;
  }
  return distance;
};

const edges = [
  { source: 1, target: 2, weight: 5 },
  { source: 1, target: 4, weight: 7 },
  { source: 1, target: 3, weight: 3 },
  { source: 2, target: 4, weight: 3 },
  { source: 2, target: 5, weight: 2 },
  { source: 3, target: 4, weight: 1 },
  { source: 4, target: 5, weight: 2 },
  { source: 2, target: 1, weight: 5 },
  { source: 4, target: 1, weight: 7 },
  { source: 3, target: 1, weight: 3 },
  { source: 4, target: 2, weight: 3 },
  { source: 5, target: 2, weight: 2 },
  { source: 4, target: 3, weight: 1 },
  { source: 5, target: 4, weight: 2 },
];

console.log(bellmanFord(1, 5, edges));
