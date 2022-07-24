/**
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
var kInversePairs = function (n, k) {
  const dp = Array.from(Array(n + 1), () => Array.from(Array(k + 1), () => -1)),
    mod = 1000000007;
  const dfs = function (count, pairs) {
    if (count === 0) return 0;
    if (pairs === 0) return 1;
    if (dp[count][pairs] !== -1) return dp[count][pairs];
    dp[count][pairs] = 0;
    for (let i = 0; i <= Math.min(pairs, count - 1); i++) {
      dp[count][pairs] = (dp[count][pairs] + dfs(count - 1, pairs - i)) % mod;
    }
    return dp[count][pairs];
  };
  return dfs(n, k) % mod;
};

const n = 3,
  k = 0;
console.log(kInversePairs(n, k));
