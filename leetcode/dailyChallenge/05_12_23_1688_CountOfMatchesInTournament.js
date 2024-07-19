/**
 * @param {number} n
 * @return {number}
 */
var numberOfMatches = function (n) {
  const dp = [0, 0, 1];
  for (let i = 3; i <= n; i++) {
    const matches = Math.floor(i / 2);
    dp.push(matches + dp[i - matches]);
  }
  return dp[n];
};

const n = 100;
console.log(numberOfMatches(n));
