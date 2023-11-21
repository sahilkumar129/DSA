/**
 * @param {string} s
 * @return {number}
 */
var countPalindromicSubsequence = function (s) {
  let leftMap = new Map(),
    rightMap = new Map(),
    ans = 0,
    sub = new Set();
  for (let i = 1; i < s.length; i++) {
    rightMap.set(s[i], (rightMap.get(s[i]) ?? 0) + 1);
  }
  leftMap.set(s[0], 1);
  for (let i = 1; i < s.length - 1; i++) {
    rightMap.set(s[i], rightMap.get(s[i]) - 1);
    ans += getCountAtPosition(i, s, leftMap, rightMap, sub);
    leftMap.set(s[i], (leftMap.get(s[i]) ?? 0) + 1);
  }
  return ans;
};

var getCountAtPosition = function (pos, s, left, right, sub) {
  let ans = 0;
  const chars = "abcdefghijklmnopqrstuvwxyz";
  for (const char of chars) {
    if (left.get(char) > 0 && right.get(char) > 0 && !sub.has(`${char}${s[pos]}${char}`)) {
      sub.add(`${char}${s[pos]}${char}`);
      ans++;
    }
  }
  return ans;
};

const s = "bbcbaba";
console.log(countPalindromicSubsequence(s));
