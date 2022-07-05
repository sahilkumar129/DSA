/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var characterReplacement = function (s, k) {
  let i = 0,
    j = 0,
    maxFreq = 0,
    ans = 0;
  const charMap = new Map();
  while (j < s.length) {
    // console.log(i, j, s[j]);
    const charFreq = (charMap.get(s[j]) ?? 0) + 1;
    maxFreq = Math.max(maxFreq, charFreq);
    if (j - i + 1 - maxFreq > k) {
      charMap.set(s[i], charMap.get(s[i]) - 1);
      i++;
    } else {
      ans = Math.max(ans, j - i + 1);
      charMap.set(s[j], charFreq);
      j++;
    }
    // console.log(maxFreq, charMap, ans);
  }
  return ans;
};

const s = "",
  k = 1;
console.log(characterReplacement(s, k));
