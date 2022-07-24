/**
 * @param {string} s
 * @return {number}
 */
var countSubstrings = function (s) {
  let ans = 0,
    l,
    r;
  const getPalindromeCount = function (l, r) {
    while (l >= 0 && r < s.length && s[l--] === s[r++]) ans++;
  };
  for (let i = 0; i < s.length; i++) {
    l = i;
    r = i;
    getPalindromeCount(l, r);
    l = i;
    r = i + 1;
    getPalindromeCount(l, r);
  }
  return ans;
};

const s = "aaa";
console.log(countSubstrings(s));
