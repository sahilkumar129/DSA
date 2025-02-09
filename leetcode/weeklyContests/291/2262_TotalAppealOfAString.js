/**
 * @param {string} s
 * @return {number}
 */
var appealSum = function (s) {
  let prev = 0,
    curr = 0,
    ans = 0,
    charOcc = new Map();
  for (let i = 0; i < s.length; i++) {
    let curr = prev + i + 1 - ((charOcc.get(s[i]) ?? -1) + 1);
    ans += curr;
    prev = curr;
    charOcc.set(s[i], i);
  }
  return ans;
};

const s = "abbca";
console.log(appealSum(s));
