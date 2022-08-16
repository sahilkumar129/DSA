/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function (s) {
  const map = new Map();
  for (const c of s) map.set(c, map.get(c) + 1 || 1);
  for (let i = 0; i < s.length; i++) if (map.get(s[i]) === 1) return i;
  return -1;
};

const s = "leetcode";
console.log(firstUniqChar(s));
