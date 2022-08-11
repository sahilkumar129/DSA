/**
 * @param {number[][]} points
 * @param {number[][]} queries
 * @return {number[]}
 */
var countPoints = function (points, queries) {
  const ans = [];
  for (const query of queries) {
    let count = 0;
    for (const point of points) {
      if (insideCircle(query, point)) count++;
    }
    ans.push(count);
  }
  return ans;
};

var insideCircle = function ([cx, cy, r], [x, y]) {
  const distance = Math.ceil(Math.sqrt(Math.pow(cx - x, 2) + Math.pow(cy - y, 2)));
  return distance - r <= 0;
};

const points = [
    [1, 3],
    [3, 3],
    [5, 3],
    [2, 2],
  ],
  queries = [
    [2, 3, 1],
    [4, 3, 1],
    [1, 1, 2],
  ];
console.log(countPoints(points, queries));
