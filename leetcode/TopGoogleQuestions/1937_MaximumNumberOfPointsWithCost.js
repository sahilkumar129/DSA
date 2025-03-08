/**
 * @param {number[][]} points
 * @return {number}
 */
var maxPoints = function (points) {
  let leftMax,
    rightMax,
    previous = points[0];
  const M = points.length,
    N = points[0].length;
  for (let i = 1; i < M; i++) {
    [leftMax, rightMax] = [getLeftMax(previous), getRightMax(previous)];
    for (let j = 0; j < N; j++) {
      previous[j] = Math.max(leftMax[j], rightMax[j]) + points[i][j];
    }
  }
  let ans = 0;
  previous.forEach((p) => {
    ans = Math.max(ans, p);
  });
  return ans;
};

var getLeftMax = function (arr) {
  const left = [...arr];
  for (let i = 1; i < arr.length; i++) {
    left[i] = Math.max(arr[i], left[i - 1] - 1);
  }
  return left;
};

var getRightMax = function (arr) {
  const right = [...arr];
  for (let i = arr.length - 2; i >= 0; i--) {
    right[i] = Math.max(arr[i], right[i + 1] - 1);
  }
  return right;
};

const points = [
  [1, 2, 3],
  [1, 5, 1],
  [3, 1, 1],
];
console.log(maxPoints(points));
