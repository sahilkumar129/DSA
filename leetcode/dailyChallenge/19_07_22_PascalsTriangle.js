/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function (numRows) {
  const result = [[1]];
  if (numRows >= 2) result.push([1, 1]);
  for (let i = 3; i <= numRows; i++) {
    const rows = [1];
    for (let j = 0; j < result[result.length - 1].length - 1; j++)
      rows.push(result[result.length - 1][j] + result[result.length - 1][j + 1]);
    rows.push(1);
    result.push(rows);
  }
  return result;
};

const numRows = 5;
console.log(generate(numRows));
