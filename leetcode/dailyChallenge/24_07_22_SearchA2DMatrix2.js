/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function (matrix, target) {
  let i = 0,
    j = matrix[0].length - 1;
  while (i < matrix.length && j >= 0) {
    const val = matrix[i][j];
    if (val === target) return true;
    if (val < target) i++;
    else j--;
  }
  return false;
};

const matrix = [
    [1, 4, 7, 11, 15],
    [2, 5, 8, 12, 19],
    [3, 6, 9, 16, 22],
    [10, 13, 14, 17, 24],
    [18, 21, 23, 26, 30],
  ],
  target = 5;
console.log(searchMatrix(matrix, target));
