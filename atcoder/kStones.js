var kStonesRec = function (K, stones) {
  const dfs = function (leftStones) {
    for (let i = 0; i < stones.length; i++) {
      if (stones[i] <= leftStones) if (!dfs(leftStones - stones[i])) return true;
    }
    return false;
  };
  return dfs(K) ? "first" : "second";
};

var kStones = function (K, stones) {
  let dp = new Array(K + 1).fill(false);
  for (let leftStones = 1; leftStones <= K; leftStones++) {
    for (let j = 0; j < stones.length; j++) {
      if (leftStones >= stones[j] && !dp[leftStones - stones[j]]) {
        dp[leftStones] = true;
        break;
      }
    }
  }
  return dp[K] ? "first" : "second";
};

console.log(kStones(20, [1, 2, 3]));
