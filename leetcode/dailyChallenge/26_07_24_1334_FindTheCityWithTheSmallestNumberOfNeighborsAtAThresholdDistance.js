/**
 * @param {number} n
 * @param {number[][]} edges
 * @param {number} distanceThreshold
 * @return {number}
 */
var findTheCity = function (n, edges, distanceThreshold) {
  const distanceMatrix = createAdjMatrix(n, edges);
  updateDMFloydWarshal(n, distanceMatrix);
  const minCitiesMap = new Map();
  countMinCitiesCount(n, distanceMatrix, minCitiesMap, distanceThreshold);
  return findMinCity(minCitiesMap);
};

var findMinCity = function (citiesMap) {
  let ans = { val: 0, count: citiesMap.size };
  citiesMap.forEach((val, key) => {
    if (val < ans.count) ans = { val: key, count: val };
    if (val == ans.count && key > ans.val) ans = { val: key, count: val };
  });
  return ans.val;
};

var countMinCitiesCount = function (n, distance, citiesMap, dt) {
  for (let i = 0; i < n; i++) {
    let iCityCount = 0;
    for (let j = 0; j < n; j++) {
      if (distance[i][j] <= dt) iCityCount++;
    }
    citiesMap.set(i, iCityCount);
  }
};

var updateDMFloydWarshal = function (n, distanceMatrix) {
  for (let k = 0; k < n; k++) {
    for (let i = 0; i < n; i++) {
      for (let j = 0; j < n; j++) {
        distanceMatrix[i][j] = Math.min(
          distanceMatrix[i][j],
          distanceMatrix[i][k] + distanceMatrix[k][j]
        );
      }
    }
  }
};

var createAdjMatrix = function (n, edges) {
  const adjMatrix = [];
  for (let i = 0; i < n; i++) {
    const row = new Array(n).fill(100000);
    row[i] = 0;
    adjMatrix.push(row);
  }
  for (const [x, y, d] of edges) {
    adjMatrix[x][y] = d;
    adjMatrix[y][x] = d;
  }
  return adjMatrix;
};

const n = 5,
  edges = [
    [0, 1, 2],
    [0, 4, 8],
    [1, 2, 10000],
    [1, 4, 2],
    [2, 3, 10000],
    [3, 4, 1],
  ],
  distanceThreshold = 4;
console.log(findTheCity(n, edges, distanceThreshold));
