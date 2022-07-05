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

function readline() {
  return inputString[currentLine++];
}

var frog2 = function (N, K, heights) {
  let dp = new Array(N).fill(Number.MAX_VALUE);
  dp[N - 1] = 0;
  for (let i = N - 2; i >= 0; i--) {
    for (let j = 1; j <= K && i + j < N; j++)
      dp[i] = Math.min(dp[i], dp[i + j] + Math.abs(heights[i] - heights[i + j]));
  }
  console.log(dp);
  return dp[0];
};

// var main = function () {
//   const [N, K] = readline()
//     .split(" ")
//     .map((h) => parseInt(h));
//   const heights = readline()
//     .split(" ")
//     .map((h) => parseInt(h));
//   return frog2(N, K, heights);
// };

console.log(frog2(10, 4, [40, 10, 20, 70, 80, 10, 20, 70, 80, 60]));
