/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var rotate = function (matrix) {
  if (!matrix?.length || !matrix[0].length) return matrix;
  let l = 0,
    r = matrix.length - 1;
  while (l < r) {
    for (let i = 0; i < r - l; i++) {
      const u = l,
        d = r;
      const topLeft = matrix[u][l + i];
      matrix[u][l + i] = matrix[d - i][l];
      matrix[d - i][l] = matrix[d][r - i];
      matrix[d][r - i] = matrix[u + i][r];
      matrix[u + i][r] = topLeft;
    }
    l++;
    r--;
  }
};

const matrix = [
  [5, 1, 9, 11],
  [2, 4, 8, 10],
  [13, 3, 6, 7],
  [15, 14, 12, 16],
];
rotate(matrix);
console.log(matrix);
