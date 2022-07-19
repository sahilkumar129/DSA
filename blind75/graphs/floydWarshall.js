var floydWarshall = function (n, adjMatrix) {
  const distance = createDistanceMatrix(n, adjMatrix);
  for (let k = 0; k < n; k++) {
    for (let i = 0; i < n; i++) {
      for (let j = 0; j < n; j++) {
        distance[i][j] = Math.min(distance[i][j], distance[i][k] + distance[k][j]);
      }
    }
  }
  return distance;
};

var createDistanceMatrix = function (n, adjMatrix) {
  const distance = [];
  for (let i = 0; i < n; i++) {
    const row = [];
    for (let j = 0; j < n; j++) {
      if (i == j) row.push(0);
      else if (adjMatrix[i][j]) row.push(adjMatrix[i][j]);
      else row.push(Number.POSITIVE_INFINITY);
    }
    distance.push(row);
  }
  return distance;
};

const adjMatrix = [
  [null, 5, null, 9, 1],
  [5, null, 2, null, null],
  [null, 2, null, 7, null],
  [9, null, 7, null, 2],
  [1, null, null, 2, null],
];

console.log(floydWarshall(5, adjMatrix));
