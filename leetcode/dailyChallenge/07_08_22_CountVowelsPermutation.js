/**
 * @param {number} n
 * @return {number}
 */
var countVowelPermutation = function (n) {
  const dp = Array.from(Array(6), () => Array.from(Array(n + 1), () => -1));
  const dfs = function (prev, num) {
    if (num === 0) return 1;
    if (dp[getCode(prev)][num] !== -1) return dp[getCode(prev)][num];
    dp[getCode(prev)][num] = 0;
    for (let next of getNextVowels(prev))
      dp[getCode(prev)][num] = (dp[getCode(prev)][num] + dfs(next, num - 1)) % 1000000007;
    return dp[getCode(prev)][num] % 1000000007;
  };
  return dfs(null, n);
};

var getNextVowels = function (prev) {
  if (!prev) return ["a", "e", "i", "o", "u"];
  switch (prev) {
    case "a":
      return ["e"];
    case "e":
      return ["a", "i"];
    case "i":
      return ["a", "e", "o", "u"];
    case "o":
      return ["i", "u"];
    case "u":
      return ["a"];
    default:
      return [];
  }
};

var getCode = function (vowel) {
  switch (vowel) {
    case "a":
      return 0;
    case "e":
      return 1;
    case "i":
      return 2;
    case "o":
      return 3;
    case "u":
      return 4;
    default:
      return 5;
  }
};

const n = 1000;
console.log(countVowelPermutation(n));
