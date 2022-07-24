/**
 * @param {string} s1
 * @param {string} s2
 * @param {string} s3
 * @return {boolean}
 */
var isInterleave = function (s1, s2, s3) {
  if (s1.length + s2.length !== s3.length) return false;
  const dp = Array.from(Array(s1.length + 1), () => Array.from(Array(s2.length + 1), () => -1));
  const dfs = function (i, j, k) {
    if (k === s3.length) return 1;
    if (i >= s1.length && j >= s2.length) return 0;
    if (dp[i][j] !== -1) return dp[i][j];
    dp[i][j] = 0;
    if (i < s1.length && s1[i] === s3[k]) dp[i][j] = dfs(i + 1, j, k + 1);
    if (dp[i][j] !== 1 && j < s2.length && s2[j] === s3[k]) dp[i][j] = dfs(i, j + 1, k + 1);
    return dp[i][j];
  };
  return dfs(0, 0, 0);
};

var getCharCode = function (c) {
  return c.charCodeAt(0) - "a".charCodeAt(0);
};

const s1 = "aabcc",
  s2 = "dbbca",
  s3 = "aadbbbaccc";
console.log(isInterleave(s1, s2, s3));
