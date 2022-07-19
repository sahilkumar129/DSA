/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function (a, b) {
  let i = a.length - 1,
    j = b.length - 1,
    ans = "",
    curr = 0,
    carry = 0;
  while (i >= 0 && j >= 0) {
    curr = parseInt(a[i]) + parseInt(b[j]) + carry;
    ans += `${curr % 2}`;
    carry = parseInt(curr / 2);
    i--;
    j--;
  }
  while (i >= 0) {
    curr = parseInt(parseInt(a[i]) + carry);
    ans += `${curr % 2}`;
    carry = parseInt(curr / 2);
    i--;
  }
  while (j >= 0) {
    curr = parseInt(parseInt(b[j]) + carry);
    ans += `${curr % 2}`;
    carry = parseInt(curr / 2);
    j--;
  }
  if (carry) ans += `${carry}`;
  ans = ans.split("");
  for (i = 0, j = ans.length - 1; i < j; i++, j--) {
    let temp = ans[i];
    ans[i] = ans[j];
    ans[j] = temp;
  }
  ans = ans.join("");
  return ans;
};

const a = "11",
  b = "1";
console.log(addBinary(a, b));
