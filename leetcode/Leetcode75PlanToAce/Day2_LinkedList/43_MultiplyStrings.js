/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var multiply = function (num1, num2) {
  if (num1 == 0 || num2 == 0) return "0";
  let i = num1.length - 1,
    j = num2.length - 1,
    ans = "";
  for (let i = num1.length - 1; i >= 0; i--) {
    let curr,
      tempAns = "",
      carry = 0;
    for (let j = num2.length - 1; j >= 0; j--) {
      curr = parseInt(num1[i]) * parseInt(num2[j]) + carry;
      tempAns = (curr % 10) + tempAns;
      carry = Math.floor(curr / 10);
    }
    if (carry) tempAns = carry + tempAns;
    ans = addToAns(tempAns, ans, num1.length - i - 1);
  }

  return ans;
};

var addToAns = function (temp, ans, i) {
  while (i--) temp += "0";
  let carry = 0,
    j = temp.length - 1,
    k = ans.length - 1,
    curr,
    sum = "";
  while (j >= 0 && k >= 0) {
    curr = parseInt(temp[j--]) + parseInt(ans[k--]) + carry;
    sum = (curr % 10) + sum;
    carry = Math.floor(curr / 10);
  }
  while (j >= 0) {
    curr = parseInt(temp[j--]) + carry;
    sum = (curr % 10) + sum;
    carry = Math.floor(curr / 10);
  }
  while (k >= 0) {
    curr = parseInt(temp[k--]) + carry;
    sum = (curr % 10) + sum;
    carry = Math.floor(curr / 10);
  }
  if (carry) sum = carry + sum;
  return sum;
};

const num1 = "123",
  num2 = "456";
console.log(multiply(num1, num2));
