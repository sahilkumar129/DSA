"use strict";

process.stdin.resume();
process.stdin.setEncoding("utf-8");

let inputString = "";
let currentLine = 0;

process.stdin.on("data", (inputStdin) => {
  inputString += inputStdin;
});

process.stdin.on("end", (_) => {
  inputString = inputString
    .trim()
    .split("\n")
    .map((string) => {
      return string.trim();
    });

  main();
});

function readline() {
  return inputString[currentLine++];
}

var coinCombinations = function (coins, sum) {
  const dp = createDp(coins.length, sum);
  const dfs = function (i, requiredSum) {
    if (i >= coins.length || requiredSum < 0) return 0;
    if (requiredSum == 0) return 1;
    if (dp[i][requiredSum] != -1) return dp[i][requiredSum];
    dp[i][requiredSum] = dfs(i, requiredSum - coins[i]) + dfs(i + 1, requiredSum);
    return dp[i][requiredSum];
  };
  return dfs(0, sum);
};

var createDp = function (n, sum) {
  const dp = [];
  for (let i = 0; i < n; i++) {
    let row = [];
    for (let j = 0; j <= sum; j++) row.push(-1);
    dp.push(row);
  }
  return dp;
};

var main = function () {
  const [N, sum] = readline()
    .split(" ")
    .map((h) => parseInt(h));
  const coins = readline()
    .split(" ")
    .map((h) => parseInt(h));
  console.log(coinCombinations(coins, sum));
};

// const coins = [5, 3, 2],
//   sum = 9;
// console.log(coinCombinations(coins, sum));
