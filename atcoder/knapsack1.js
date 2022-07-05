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
// dp[w] means "maximum value for this weight";
var knapsack1 = function (N, W, items) {
  const dp = new Array(W + 1).fill(0);
  for (let i = 0; i < N; i++) {
    const [weight, value] = items[i];
    for (let w = W; w >= 0; w--) if (w >= weight) dp[w] = Math.max(dp[w], dp[w - weight] + value);
  }
  // console.log(dp);
  return dp[W];
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
//   return knapsack1(N, W, items);
// };

console.log(
  knapsack1(6, 15, [
    [6, 5],
    [5, 6],
    [6, 4],
    [6, 6],
    [3, 5],
    [7, 2],
  ])
);
