/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function (s, t) {
  const count = new Array(26).fill(0);
  for (const c of s) count[charCode(c)]++;
  for (const c of t) count[charCode(c)]--;
  for (const c of count) if (c !== 0) return false;
  return true;
};

var charCode = function (c) {
  return c.charCodeAt(0) - "a".charCodeAt(0);
};

const s = "anagram",
  t = "nagaram";
console.log(isAnagram(s, t));
