/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
// Approach 1 (O(m+n))
// var searchMatrix = function(matrix, target) {
//     const m=matrix.length, n=matrix[0].length;
//     let i=0,j=n-1,row=0;
//     while(row<m && i<=j) {
//         if(matrix[row][i] === target || matrix[row][j] === target) return true;
//         if(matrix[row][j] < target) row++;
//         else i++;
//     }
//     return false;
// };

// Approach 2: Binary Search (O(log(m)*log(n)))
var searchMatrix = function (matrix, target) {
  const m = matrix.length,
    n = matrix[0].length;
  const row = findRow(matrix, m, target);
  return findCol(matrix, n, row, target);
};

var findRow = function (matrix, m, target) {
  let low = 0,
    high = m - 1,
    mid;
  while (low <= high) {
    mid = Math.floor(low + (high - low) / 2);
    if (mid === m - 1 || (matrix[mid][0] <= target && matrix[mid + 1][0] > target)) return mid;
    if (matrix[mid][0] <= target) low = mid + 1;
    else high = mid - 1;
  }
  return low;
};

var findCol = function (matrix, m, row, target) {
  let low = 0,
    high = m - 1,
    mid;
  while (low <= high) {
    mid = Math.floor(low + (high - low) / 2);
    if (matrix[row][mid] === target) return true;
    if (matrix[row][mid] < target) low = mid + 1;
    else high = mid - 1;
  }
  return false;
};

const matrix = [
    [1, 3, 5, 7],
    [10, 11, 16, 20],
    [23, 30, 34, 60],
  ],
  target = 3;
console.log(searchMatrix(matrix, target));
