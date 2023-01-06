/**
 * @param {number[][]} points
 * @return {number}
 */
var findMinArrowShots = function (points) {
  if (!points?.length) return 0;
  points.sort((a, b) => a[0] - b[0]);
  let prev = points[0][1],
    ans = 1;
  for (let i = 1; i < points.length; i++) {
    if (points[i][0] > prev) {
      prev = points[i][1];
      ans++;
    } else prev = Math.min(prev, points[i][1]);
  }
  return ans;
};

const points = [
  [10, 16],
  [2, 8],
  [1, 6],
  [7, 12],
];
console.log(findMinArrowShots(points));
