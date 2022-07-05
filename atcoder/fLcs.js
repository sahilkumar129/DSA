var fLcs = function (s, t) {
  const dp = Array.from(Array(l1 + 1), () => Array.from(Array(l2 + 1), () => ""));
  let ans = "";
  for (let i = s.length - 1; i >= 0; i--) {
    for (let j = t.length - 1; j >= 0; j--) {
      dp[i][j] =
        s[i] === t[j]
          ? `${s[i]}${dp[i + 1][j + 1]}`
          : dp[i + 1][j].length >= dp[i][j + 1].length
          ? dp[i + 1][j]
          : dp[i][j + 1];
      if (dp[i][j].length > ans.length) ans = dp[i][j];
    }
  }
  return ans;
};

console.log(fLcs("abracadabra", "avadakedavra"));
