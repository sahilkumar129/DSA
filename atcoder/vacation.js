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

var vacation = function (N, happiness) {
  // initialize DP
  let dp = [];
  for (let i = 0; i < N; i++) {
    const row = [];
    for (let j = 0; j < 3; j++) {
      if (i == N - 1) row.push(happiness[i][j]);
      else row.push(0);
    }
    dp.push(row);
  }

  for (let i = N - 2; i >= 0; i--) {
    for (let j = 0; j < 3; j++) {
      dp[i][j] = Math.max(
        happiness[i][j] + dp[i + 1][(j + 1) % 3],
        happiness[i][j] + dp[i + 1][(j + 2) % 3]
      );
    }
  }
  return Math.max(...dp[0]);
};

// var main = function () {
//   const N = parseInt(readline());
//   const happiness = [];
//   let ithDayHappiness;
//   for (let i = 0; i < N; i++) {
//     ithDayHappiness = readline()
//       .split(" ")
//       .map((h) => parseInt(h));
//     happiness.push(ithDayHappiness);
//   }
//   return vacation(N, happiness);
// };

console.log(
  vacation(7, [
    [6, 7, 8],
    [8, 8, 3],
    [2, 5, 2],
    [7, 8, 6],
    [4, 6, 8],
    [2, 3, 4],
    [7, 5, 1],
  ])
);
