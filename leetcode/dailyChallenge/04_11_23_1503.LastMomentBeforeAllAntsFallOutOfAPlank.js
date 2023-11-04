/**
 * @param {number} n
 * @param {number[]} left
 * @param {number[]} right
 * @return {number}
 */
var getLastMoment = function (n, left, right) {
  let leftMax = 0,
    rightMin = n;
  left.forEach((x) => (leftMax = Math.max(leftMax, x)));
  right.forEach((x) => (rightMin = Math.min(rightMin, x)));
  const leftRightMost = left.length > 0 ? leftMax : 0;
  const rightLeftMost = right.length > 0 ? n - rightMin : 0;
  return Math.max(rightLeftMost, leftRightMost);
};

const n = 4,
  left = [4, 3],
  right = [0, 1];
console.log(getLastMoment(n, left, right));
