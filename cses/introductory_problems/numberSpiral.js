/**	
	A number spiral is an infinite grid whose upper-left square has number 1. Here are the first five layers of the spiral:
	Your task is to find out the number in row y and column x.
	Input
	The first input line contains an integer t: the number of tests.
	After this, there are t lines, each containing integers y and x.
	Output
	For each test, print the number in row y and column x.
	Constraints
	1≤t≤105
	1≤y,x≤109
	Example
	Input:
	3
	2 3
	1 1
	4 2
	Output:
	8
	1
	15
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
  numberSpiral(_input);
});

const log = function (text) {
  process.stdout.write(text);
};

const end = function () {
  process.stdout.write("\n");
};

const numberSpiral = function (input) {
  let n = +input[0];
  for (let i = 1; i <= n; i++) {
    const [x, y] = input[i].split(" ").map((x) => +x);
    let num = 0;
    if (y <= x) {
      if (x % 2 === 0) {
        num = x * x;
        num = num - y + 1;
      } else {
        num = (x - 1) * (x - 1);
        num += y;
      }
    } else {
      if (y % 2 === 1) {
        num = y * y;
        num = num - x + 1;
      } else {
        num = (y - 1) * (y - 1);
        num += x;
      }
    }
    log(`${num}`);
    end();
  }
};
