/**
 * @param {string} s
 * @param {string[]} words
 * @return {number}
 */
var numMatchingSubseq = function (s, words) {
  const getCharCode = (char) => char.charCodeAt() - 97;

  let count = 0;
  const indices = Array.from({ length: 26 }, () => []);

  for (let i = 0; i < s.length; i++) {
    indices[getCharCode(s[i])].push(i);
  }

  for (const word of words) {
    let current = -1,
      i = -1;

    for (const char of word) {
      const c = getCharCode(char);
      i = findIndex(current, c, indices);
      if (i === -1) break;
      current = i;
    }
    if (i !== -1) count += 1;
  }

  return count;
};

var findIndex = function (current, c, indices) {
  let ans = -1,
    low = 0,
    high = indices[c].length - 1,
    mid;
  while (low <= high) {
    mid = Math.floor(low + (high - low) / 2);
    if (indices[c][mid] <= current) low = mid + 1;
    else {
      high = mid - 1;
      ans = mid;
    }
  }
  return ans === -1 ? -1 : indices[c][ans];
};

const s = "dsahjpjauf",
  words = ["ahjpjau", "ja", "ahbwzgqnuk", "tnmlanowax"];
console.log(numMatchingSubseq(s, words));
