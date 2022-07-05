var numWays = function (n, k) {
  let ans = 0;
  const dfs = function (n, k, prev, count, arr) {
    if (n == 0) {
      ans++;
      console.log(arr);
      return;
    }
    for (let j = 0; j < k; j++) {
      if (j == prev && count < 2) dfs(n - 1, k, j, count + 1, [...arr, j]);
      else if (j == prev) continue;
      else dfs(n - 1, k, j, 1, [...arr, j]);
    }
  };
  dfs(n, k, 0, 0, []);
  return ans;
};

console.log(numWays(5, 3));
