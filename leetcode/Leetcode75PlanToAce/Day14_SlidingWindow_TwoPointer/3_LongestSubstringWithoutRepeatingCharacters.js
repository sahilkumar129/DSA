/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
  let ans = 0,
    start = 0;
  const map = new Map();
  for (let i = 0; i < s.length; i++) {
    if (map.has(s[i])) {
      ans = Math.max(i - start, ans);
      while (start <= map.get(s[i])) map.delete(s[start++]);
    }
    map.set(s[i], i);
  }
  ans = Math.max(s.length - start, ans);
  return ans;
};

const s = "abcabcbb";
console.log(lengthOfLongestSubstring(s));
