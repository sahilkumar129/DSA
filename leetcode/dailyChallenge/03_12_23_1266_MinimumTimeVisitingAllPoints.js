/**
 * @param {number[][]} points
 * @return {number}
 */
var minTimeToVisitAllPoints = function (points) {
  let ans = 0,
    x = 0,
    y = 0,
    min;
  for (let i = 0; i < points.length - 1; i++) {
    x = Math.abs(points[i + 1][0] - points[i][0]);
    y = Math.abs(points[i + 1][1] - points[i][1]);
    min = Math.min(x, y);
    ans += min + Math.max(x, y) - min;
  }
  return ans;
};

const points = [
  [1, 1],
  [3, 4],
  [-1, 0],
];
console.log(minTimeToVisitAllPoints(points));
