/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
  let i = 0,
    ans = 0,
    maxAns = 0,
    charMap = new Map();
  while (i < s.length) {
    if (charMap.has(s[i])) {
      i = charMap.get(s[i]) + 1;
      while (i + 1 < s.length && s[i + 1] == s[i]) i++;
      charMap = new Map();
      charMap.set(s[i], i);
      ans = 1;
    } else {
      charMap.set(s[i], i);
      ans++;
    }
    i++;
    maxAns = Math.max(maxAns, ans);
  }
  return maxAns;
};

const s = "bacbaacbbb";
console.log(lengthOfLongestSubstring(s));
