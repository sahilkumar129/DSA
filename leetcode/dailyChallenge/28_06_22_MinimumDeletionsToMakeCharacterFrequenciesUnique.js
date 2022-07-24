/**
 * @param {string} s
 * @return {number}
 */
var minDeletions = function (s) {
  let count = new Array(26).fill(0);
  for (const c of s) count[getCharCode(c)]++;
  count = count.filter((c) => c !== 0);
  count.sort((a, b) => a - b);
  let ans = 0;
  for (let i = count.length - 2; i >= 0; i--) {
    if (count[i] >= count[i + 1]) {
      ans += count[i] - count[i + 1] + 1;
      count[i] = count[i + 1] === 1 ? count[i + 1] : count[i + 1] - 1;
    }
  }
  return ans;
};

var getCharCode = function (c) {
  return c.charCodeAt(0) - "a".charCodeAt(0);
};

const s = "aaabbbcc";
console.log(minDeletions(s));
