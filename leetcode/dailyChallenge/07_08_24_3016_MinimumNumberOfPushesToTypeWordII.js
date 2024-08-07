/**
 * @param {string} word
 * @return {number}
 */
var minimumPushes = function (word) {
  let charCount = new Array(26).fill(0);
  for (const c of word) charCount[getCharCode(c)]++;
  charCount.sort((a, b) => b - a);
  let ans = 0,
    c = 7;
  for (let i = 0; i < 26; i++) {
    if (charCount[i] === 0) break;
    c++;
    ans += Math.floor(c / 8) * charCount[i];
  }
  return ans;
};

var getCharCode = function (c) {
  return c.charCodeAt(0) - "a".charCodeAt(0);
};

const word = "xyzxyzxyzxyz";
console.log(minimumPushes(word));
