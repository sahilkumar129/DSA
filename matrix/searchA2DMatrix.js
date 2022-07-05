/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function (matrix, target) {
  const row = findRow(matrix, target);
  if (row == -1) return false;
  const col = findCol(matrix, row, target);
  if (col == -1) return false;
  return true;
};

var findRow = function (matrix, target) {
  let low = 0,
    high = matrix.length - 1,
    mid;
  while (low <= high) {
    mid = parseInt(low + (high - low) / 2);
    if (matrix[mid][0] <= target && (mid == matrix.length - 1 || matrix[mid + 1][0] > target))
      return mid;
    if (matrix[mid][0] > target) high = mid - 1;
    else low = mid + 1;
  }
  return -1;
};

var findCol = function (matrix, row, target) {
  let low = 0,
    high = matrix[row].length - 1,
    mid;
  while (low <= high) {
    mid = parseInt(low + (high - low) / 2);
    if (matrix[row][mid] == target) return mid;
    if (matrix[row][mid] > target) high = mid - 1;
    else low = mid + 1;
  }
  return -1;
};

const matrix = [
    [1, 3, 5, 7],
    [10, 11, 16, 20],
    [23, 30, 34, 60],
  ],
  target = 3;
console.log(searchMatrix(matrix, target));
