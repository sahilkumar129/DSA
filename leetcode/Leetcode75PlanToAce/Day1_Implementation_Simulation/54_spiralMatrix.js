/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function (matrix) {
  let l = 0,
    u = 0,
    d = matrix.length - 1,
    r = matrix[0].length - 1,
    i;
  const ans = [];
  while (l <= r && u <= d) {
    for (i = l; i <= r; i++) ans.push(matrix[u][i]);
    u++;
    if (l > r || u > d) break;
    for (i = u; i <= d; i++) ans.push(matrix[i][r]);
    r--;
    if (l > r || u > d) break;
    for (i = r; i >= l; i--) ans.push(matrix[d][i]);
    d--;
    if (l > r || u > d) break;
    for (i = d; i >= u; i--) ans.push(matrix[i][l]);
    l++;
  }
  return ans;
};

const matrix = [
  [1, 2, 3, 4],
  [5, 6, 7, 8],
  [9, 10, 11, 12],
];
console.log(spiralOrder(matrix));
