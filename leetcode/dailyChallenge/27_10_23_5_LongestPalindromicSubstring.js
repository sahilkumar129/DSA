/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function (s) {
  let ans = s[0];
  for (let i = 0; i < s.length - 1; i++) {
    let oddPal = getPalindromeFromIndex("", s, i, i),
      evenPal = getPalindromeFromIndex("", s, i, i + 1);
    if (oddPal.length > ans.length) ans = oddPal;
    if (evenPal.length > ans.length) ans = evenPal;
  }
  return ans;
};

var getPalindromeFromIndex = function (curr, s, i, j) {
  while (i >= 0 && j < s.length && s[i] == s[j]) {
    curr = i == j ? s[i] : s[i] + curr + s[j];
    i--;
    j++;
  }
  return curr;
};

const s = "babad";
console.log(longestPalindrome(s));
