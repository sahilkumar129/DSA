/** You are given a DNA sequence: a string consisting of characters A, C, G, and T. Your task is to find the longest repetition in the sequence. This is a maximum-length substring containing only one type of character.
  You are given an array of n integers. You want to modify the array so that it is increasing, i.e., every element is at least as large as the previous element.
  On each move, you may increase the value of any element by one. What is the minimum number of moves required?
  Input
  The first input line contains an integer n: the size of the array.
  Then, the second line contains n integers x1,x2,…,xn: the contents of the array.
  Output
  Print the minimum number of moves.
  Constraints
  1≤n≤2⋅105
  1≤xi≤109
  Example
  Input:
  5
  3 2 5 1 7
  Output: 5
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
  increaseArray(_input);
});

const log = function (text) {
  process.stdout.write(text);
};

const end = function () {
  process.stdout.write("\n");
};

const increaseArray = function (input) {
  for (let i = 0; i < input.length; i += 2) {
    const n = +input[i];
    const arr = input[i + 1].split(" ").map((num) => +num);
    let max = arr[0],
      inc = 0;
    for (let i = 1; i < n; i++) {
      max = Math.max(max, arr[i]);
      inc += max - arr[i];
    }
    log(`${inc}`);
    end();
  }
};
