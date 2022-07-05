/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var setZeroes = function (matrix) {
  if (!matrix.length || !matrix[0].length) return;
  const rows = matrix.length,
    cols = matrix[0].length;
  let rowZero = false;

  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      if (matrix[i][j] == 0) {
        matrix[0][j] = 0;
        if (i > 0) matrix[i][0] = 0;
        else rowZero = true;
      }
    }
  }

  for (let i = 1; i < rows; i++) {
    for (let j = 1; j < cols; j++) {
      if (matrix[i][0] == 0 || matrix[0][j] == 0) matrix[i][j] = 0;
    }
  }

  if (matrix[0][0] == 0) for (let i = 0; i < rows; i++) matrix[i][0] = 0;
  if (rowZero) for (let j = 0; j < cols; j++) matrix[0][j] = 0;
};

const matrix = [
  [0, 1, 2, 0],
  [3, 4, 5, 2],
  [1, 3, 1, 5],
];
setZeroes(matrix);
console.log(matrix);
