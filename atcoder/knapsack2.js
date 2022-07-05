// "use strict";

// process.stdin.resume();
// process.stdin.setEncoding("utf-8");

// let inputString = "";
// let currentLine = 0;

// process.stdin.on("data", (inputStdin) => {
//   inputString += inputStdin;
// });

// process.stdin.on("end", (_) => {
//   inputString = inputString
//     .trim()
//     .split("\n")
//     .map((string) => {
//       return string.trim();
//     });

//   main();
// });

// function readline() {
//   return inputString[currentLine++];
// }

// At any given i, dp[w] indicates max value with W=w and elements=[i+1,N-1]
// dp[v] means Minimum weight required to have this value v
var knapsack2 = function (N, W, items) {
  const MAX_VALUE = 10;
  const dp = new Array(MAX_VALUE + 1).fill(W + 1);
  console.log(dp);
  items.forEach((item) => {
    dp[item[1]] = item[0];
    // console.log(`${item[1]}: ${dp[item[1]]}`);
  });
  for (let i = 0; i < N; i++) {
    const [weight, value] = items[i];
    for (let v = MAX_VALUE; v >= 0; v--) {
      dp[v] = Math.min(dp[v], weight + dp[MAX_VALUE - value]);
    }
  }
  console.log(dp);
  for (let i = MAX_VALUE; i >= 0; i--) {
    if (dp[i] <= W) return i;
  }
  return 0;
};

// var main = function () {
//   const [N, W] = readline()
//     .split(" ")
//     .map((h) => parseInt(h));
//   let items = [];
//   for (let i = 0; i < N; i++) {
//     const item = readline()
//       .split(" ")
//       .map((h) => parseInt(h));
//     items.push(item);
//   }
//   return knapsack2(N, W, items);
// };

console.log(
  knapsack2(3, 7, [
    [3, 3],
    [4, 5],
    [5, 6],
  ])
);
