/** You are given all numbers between 1,2,…,n except one. Your task is to find the missing number.
	Input
	The first input line contains an integer n.
	The second line contains n−1 numbers. Each number is distinct and between 1 and n (inclusive).
	Output
	Print the missing number.
	Constraints
	2≤n≤2⋅105
	Example
	Input:
	5
	2 3 1 5
	Output:
	4
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
  missingNumber(_input);
});

const log = function (text) {
  process.stdout.write(text);
};

const end = function () {
  process.stdout.write("\n");
};

const missingNumber = function (input) {
  for (let i = 0; i < input.length; i += 2) {
    const n = +input[i];
    const arr = new Set(input[i + 1].split(" ").map((num) => +num));
    for (let i = 1; i <= n; i++) {
      if (!arr.has(i)) {
        log(`${i}`);
        end();
        break;
      }
    }
  }
};
