var coinsRec = function (probabilities) {
  let ans = 0;
  const dfs = function (i, headCount, prob) {
    if (i == probabilities.length) {
      ans += headCount > parseInt(probabilities.length / 2) ? prob : 0;
      return;
    }
    dfs(i + 1, headCount + 1, prob * probabilities[i]);
    dfs(i + 1, headCount, prob * (1 - probabilities[i]));
  };
  dfs(0, 0, 1);
  return ans;
};

var coins = function (probabilities) {
  const dp = initializeDp(probabilities);
  const dfs = function (i, headCount, prob) {
    if (i > probabilities.length || headCount > probabilities.length) return 0;
    if (i == probabilities.length) return headCount > parseInt(probabilities.length / 2) ? prob : 0;
    if (dp[i][headCount] != -1) return prob * dp[i][headCount];
    let ithProb = 0;
    ithProb += dfs(i + 1, headCount + 1, prob * probabilities[i]);
    ithProb += dfs(i + 1, headCount, prob * (1 - probabilities[i]));
    dp[i][headCount] = ithProb / prob;
    return ithProb;
  };
  dfs(0, 0, 1);
  return dp[0][0];
};

var initializeDp = function (prob) {
  const dp = [];
  for (let i = 0; i < prob.length; i++) {
    const row = [];
    for (let j = 0; j <= prob.length; j++) {
      row.push(-1);
    }
    dp.push(row);
  }
  return dp;
};

console.log(coinsRec([0.42, 0.01, 0.42, 0.99, 0.42]));
console.log(coins([0.42, 0.01, 0.42, 0.99, 0.42]));
