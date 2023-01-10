/**
  A permutation of integers 1,2,…,n is called beautiful if there are no adjacent elements whose difference is 1.
  Given n, construct a beautiful permutation if such a permutation exists.
  Input
  The only input line contains an integer n.
  Output
  Print a beautiful permutation of integers 1,2,…,n. If there are several solutions, you may print any of them. If there are no solutions, print "NO SOLUTION".
  Constraints
  1≤n≤106
  Example 1
  Input:
  5
  Output:
  4 2 5 3 1
  Example 2
  Input:
  3
  Output: NO SOLUTION

  1: 1
  2: NO SOLUTION
  3: NO SOLUTION
  4: NO SOLUTION
  5: 4 2 5 3 1
  6: 4 2 5 3 6 1
  7: 4 2 5 3 6 1 7
  8: 4 2 5 3 6 1 7
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
  permutations(_input);
});

const log = function (text) {
  process.stdout.write(text);
};

const end = function () {
  process.stdout.write("\n");
};

const permutations = function (input) {
  for (let i = 0; i < input.length; i++) {
    let n = parseInt(input[i]);
    if (n === 1) log("1");
    else if (n < 4) log("NO SOLUTION");
    else {
      let output = "2 4 1 3";
      for (let j = 5; j <= n; j++) {
        if (j % 2 === 0) output += ` ${j}`;
        else output = `${j} ` + output;
      }
      log(output);
    }
    end();
  }
};
