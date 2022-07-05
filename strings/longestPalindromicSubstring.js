/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function (s) {
  let ans = "",
    currMax = "",
    l,
    r;
  const getMaxPalindrome = function (l, r) {
    let palindrome = "";
    while (l >= 0 && r < s.length && s[l] === s[r]) {
      palindrome = l === r ? s[l] : s[l] + palindrome + s[r];
      l--;
      r++;
    }
    return palindrome;
  };
  for (let i = 0; i < s.length; i++) {
    l = i;
    r = i;
    currMax = getMaxPalindrome(l, r);
    ans = currMax.length > ans.length ? currMax : ans;

    l = i;
    r = i + 1;
    currMax = getMaxPalindrome(l, r);
    ans = currMax.length > ans.length ? currMax : ans;
  }

  return ans;
};

const s = "babad";
console.log(longestPalindrome(s));
