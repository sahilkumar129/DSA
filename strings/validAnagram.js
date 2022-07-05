/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function (s, t) {
  const charMap = new Map();
  for (let c of s) charMap.set(c, (charMap.get(c) ?? 0) + 1);
  for (let c of t) {
    if (!charMap.has(c)) return false;
    charMap.set(c, charMap.get(c) - 1);
  }
  for (const count of charMap.values()) {
    if (count !== 0) return false;
  }
  return true;
};

const s = "anagram",
  t = "nagaram";
console.log(isAnagram(s, t));
