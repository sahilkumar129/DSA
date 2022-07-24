/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {number}
 */
var numSubmatrixSumTarget = function (matrix, target) {
  const m = matrix.length,
    n = matrix[0].length,
    prefixSum = getPrefixSum(matrix);
  let ans = 0;
  for (let i = 0; i < m; i++)
    for (let j = 0; j < n; j++)
      for (let k = i; k < m; k++)
        for (let l = j; l < n; l++) ans += isTargetSum(i, j, k, l, prefixSum, target) ? 1 : 0;
  return ans;
};

var getPrefixSum = function (matrix) {
  const m = matrix.length,
    n = matrix[0].length;
  const prefixSum = matrix.map((m) => [...m]);
  for (let i = 0; i < m; i++)
    for (let j = 0; j < n; j++)
      prefixSum[i][j] +=
        (prefixSum[i - 1]?.[j] ?? 0) +
        (prefixSum[i][j - 1] ?? 0) -
        (prefixSum[i - 1]?.[j - 1] ?? 0);
  return prefixSum;
};

var isTargetSum = function (r1, c1, r2, c2, prefixSum, target) {
  return (
    prefixSum[r2][c2] -
      (prefixSum[r2][c1 - 1] ?? 0) -
      (prefixSum[r1 - 1]?.[c2] ?? 0) +
      (prefixSum[r1 - 1]?.[c1 - 1] ?? 0) ===
    target
  );
};

const matrix = [
    [0, 1, 0],
    [1, 1, 1],
    [0, 1, 0],
  ],
  target = 0;
console.log(numSubmatrixSumTarget(matrix, target));
