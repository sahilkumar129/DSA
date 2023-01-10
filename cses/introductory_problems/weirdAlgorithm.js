/**
 * Consider an algorithm that takes as input a positive integer n. If n is even, the algorithm divides it by two, and if n is odd, the algorithm multiplies it by three and adds one. The algorithm repeats this, until n is one. For example, the sequence for n=3 is as follows:
 * 3→10→5→16→8→4→2→1
 * Your task is to simulate the execution of the algorithm for a given value of n.
 * Input
 * The only input line contains an integer n.
 * Output
 * Print a line that contains all values of n during the algorithm.
 * Constraints
 * 1≤n≤106
 * Example
 * Input:
 * 3
 * Output:
 * 3 10 5 16 8 4 2 1
 */

let _input = "";
process.stdin.resume();
process.stdin.setEncoding("ascii");
process.stdin.on("data", (data) => (_input += data));
process.stdin.on("end", () => {
  _input = _input
    .trim()
    .split("\n")
    .map((string) => {
      return string.trim();
    });
  weirdAlgorithm(_input);
});

const log = function (text) {
  process.stdout.write(text);
};

const end = function () {
  process.stdout.write("\n");
};

const weirdAlgorithm = function (input) {
  for (let i = 0; i < input.length; i++) {
    let n = parseInt(input[i]);
    while (n !== 1) {
      log(`${n} `);
      if (n % 2 === 0) n = n / 2;
      else n = n * 3 + 1;
    }
    log("1");
    end();
  }
};
