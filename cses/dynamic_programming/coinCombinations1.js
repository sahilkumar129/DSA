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

// var coinCombinationRec = function (coins, sum) {
//   const dp = new Array(sum + 1).fill(-1);
//   const dfs = function (remainingSum) {
//     if (remainingSum < 0) return 0;
//     if (remainingSum == 0) return 1;
//     if (dp[remainingSum] != -1) return dp[remainingSum];
//     dp[remainingSum] = 0;
//     for (let i = 0; i < coins.length; i++) dp[remainingSum] += dfs(remainingSum - coins[i]);
//     return dp[remainingSum];
//   };
//   return dfs(sum);
// };

var coinCombination = function (coins, sum) {
  const dp = new Array(sum + 1).fill(0);
  dp[0] = 1;
  for (let i = 1; i <= sum; i++) {
    for (let j = 0; j < coins.length; j++) if (i >= coins[j]) dp[i] += dp[i - coins[j]];
  }
  return dp[sum];
};

var main = function () {
  const [N, sum] = readline()
    .split(" ")
    .map((h) => parseInt(h));
  const coins = readline()
    .split(" ")
    .map((h) => parseInt(h));
  // for (let i = 0; i < N; i++) {
  //   const item = readline()
  //     .split(" ")
  //     .map((h) => parseInt(h));
  //   items.push(item);
  // }
  console.log(coinCombination(coins, sum));
};

// console.log(coinCombinationRec([2, 3, 5], 9));
