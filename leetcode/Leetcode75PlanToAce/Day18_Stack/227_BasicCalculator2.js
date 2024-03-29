/**
 * @param {string} s
 * @return {number}
 */
var calculate = function (s) {
  const stack = [];

  while (s.length) {
    let num1, num2, firstOpt, secondOpt;
    firstOpt = s.search(/[+*\/-]/g);
    num1 = s.slice(0, firstOpt).trim();
    if (num1) stack.push(num1);
    opt = s.charAt(firstOpt);

    s = s.slice(firstOpt + 1);
    secondOpt = s.search(/[+*\/-]/g);
    num2 = s.slice(0, secondOpt === -1 ? undefined : secondOpt).trim();
    s = secondOpt === -1 ? "" : s.slice(secondOpt);

    switch (opt) {
      case "+":
        stack.push(+num2);
        break;
      case "-":
        stack.push(-num2);
        break;
      case "*":
        stack.push(stack.pop() * num2);
        break;
      case "/":
        stack.push(parseInt(stack.pop() / num2, 10));
        break;
      default:
        stack.push(num2);
    }
  }
  return stack.reduce((a, c) => +a + c);
};

const s = "3+2*2";
console.log(calculate(s));
