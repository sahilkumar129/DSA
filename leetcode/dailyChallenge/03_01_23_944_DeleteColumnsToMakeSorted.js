/**
 * @param {string[]} strs
 * @return {number}
 */
var minDeletionSize = function (strs) {
  if (strs.length <= 1) return 0;
  let count = 0;
  for (let i = 0; i < strs[0].length; i++) count += isNotLexicographicallySorted(i, strs);
  return count;
};

var isNotLexicographicallySorted = function (col, strs) {
  for (let i = 1; i < strs.length; i++)
    if (getCharCode(strs[i][col]) - getCharCode(strs[i - 1][col]) < 0) return 1;
  return 0;
};

var getCharCode = function (c) {
  return c.charCodeAt(0) - "a".charCodeAt(0);
};
