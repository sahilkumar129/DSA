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

var frog1 = function (N, heights) {
  let dp = new Array(N).fill(0);
  dp[N - 1] = 0;
  dp[N - 2] = Math.abs(heights[N - 1] - heights[N - 2]);
  for (let i = N - 3; i >= 0; i--) {
    dp[i] = Math.min(
      dp[i + 1] + Math.abs(heights[i] - heights[i + 1]),
      dp[i + 2] + Math.abs(heights[i] - heights[i + 2])
    );
  }
  return dp[0];
};

var main = function () {
  const N = readline();
  const heights = readline()
    .split(" ")
    .map((h) => parseInt(h));
  return frog1(N, heights);
};
