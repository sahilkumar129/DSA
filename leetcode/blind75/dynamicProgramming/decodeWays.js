/**
 * @param {string} s
 * @return {number}
 * Recursive
 */
// var numDecodings = function (s) {
//   const dp = new Map();
//   const dfs = function (i) {
//     if (i >= s.length) return 1;
//     if (s[i] == "0") return 0;
//     if (dp.has(i)) return dp.get(i);
//     let count = dfs(i + 1);
//     if (i == s.length - 1) return 1;
//     if (s[i] == "1" || (s[i] == "2" && s[i + 1] < "7")) count += dfs(i + 2);
//     dp.set(i, count);
//     return count;
//   };
//   return dfs(0);
// };

// Bottom Up
var numDecodings = function (s) {
  const dp = new Array(s.length + 1).fill(0);
  dp[s.length] = 1;
  for (let i = s.length - 1; i >= 0; i--) {
    if (s[i] == "0") {
      dp[i] = 0;
      continue;
    }
    if (i == s.length - 1) {
      dp[s.length - 1] = 1;
      continue;
    }
    dp[i] = dp[i + 1];
    if (s[i] == "1" || (s[i] == "2" && s[i + 1] < "7")) dp[i] += dp[i + 2];
  }
  return dp[0];
};

const s = "2611055971756562";
console.log(numDecodings(s));
