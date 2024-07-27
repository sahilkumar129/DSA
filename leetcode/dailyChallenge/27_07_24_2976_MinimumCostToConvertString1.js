/**
 * @param {string} source
 * @param {string} target
 * @param {character[]} original
 * @param {character[]} changed
 * @param {number[]} cost
 * @return {number}
 */
var minimumCost = function (source, target, original, changed, cost) {
  const distance = getDistanceMatrix(original, changed, cost);
  updateMinDistance(distance);
  let ans = 0;
  for (let i = 0; i < source.length; i++) {
    ans += distance[getCharCode(source[i])][getCharCode(target[i])];
    if (ans == Infinity) return -1;
  }
  return ans;
};

var getDistanceMatrix = function (original, changed, cost) {
  let distance = [];
  for (let i = 0; i < 26; i++) {
    const row = new Array(26).fill(Infinity);
    row[i] = 0;
    distance.push(row);
  }
  for (let i = 0; i < original.length; i++) {
    distance[getCharCode(original[i])][getCharCode(changed[i])] = Math.min(
      distance[getCharCode(original[i])][getCharCode(changed[i])],
      cost[i]
    );
  }
  return distance;
};

var getCharCode = function (c) {
  return c.charCodeAt(0) - "a".charCodeAt(0);
};

// Floyd Warshall Algorithm
var updateMinDistance = function (distance) {
  for (let k = 0; k < distance.length; k++)
    for (let i = 0; i < distance.length; i++)
      for (let j = 0; j < distance.length; j++)
        distance[i][j] = Math.min(
          distance[i][j],
          distance[i][k] + distance[k][j]
        );
};

const source = "abcd",
  target = "acbe",
  original = ["a", "b", "c", "c", "e", "d"],
  changed = ["b", "c", "b", "e", "b", "e"],
  cost = [2, 5, 5, 1, 2, 20];
console.log(minimumCost(source, target, original, changed, cost));
