/** You are given a DNA sequence: a string consisting of characters A, C, G, and T. Your task is to find the longest repetition in the sequence. This is a maximum-length substring containing only one type of character.
  Input
  The only input line contains a string of n characters.
  Output
  Print one integer: the length of the longest repetition.
  Constraints
  1≤n≤106
  Example
  Input:
  ATTCGGGA
  Output: 3
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
  repetitions(_input);
});

const log = function (text) {
  process.stdout.write(text);
};

const end = function () {
  process.stdout.write("\n");
};

const repetitions = function (input) {
  for (let i = 0; i < input.length; i++) {
    let curr = 1,
      max = 1;
    for (let j = 1; j < input[i].length; j++) {
      if (input[i][j] !== input[i][j - 1]) curr = 1;
      else curr++;
      max = Math.max(max, curr);
    }
    log(`${max}`);
    end();
  }
};
