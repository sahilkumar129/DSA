/**
 * @param {string[]} words1
 * @param {string[]} words2
 * @return {string[]}
 */
var wordSubsets = function (words1, words2) {
  const ans = [];
  const words2MaxCount = getMaxCounts(words2);
  for (const word of words1) {
    if (isUniversal(word, words2MaxCount)) ans.push(word);
  }
  return ans;
};

var getMaxCounts = function (words) {
  const maxCount = new Array(26).fill(0);
  for (const word of words) {
    const wordCount = new Array(26).fill(0);
    for (const c of word) wordCount[charCode(c)]++;
    for (let i = 0; i < 26; i++) maxCount[i] = Math.max(maxCount[i], wordCount[i]);
  }
  return maxCount;
};

var isUniversal = function (word, maxCount) {
  const count = new Array(26).fill(0);
  for (const c of word) count[charCode(c)]++;
  for (let i = 0; i < 26; i++) if (count[i] < maxCount[i]) return false;
  return true;
};

var charCode = function (c) {
  return c.charCodeAt(0) - "a".charCodeAt(0);
};

const words1 = ["amazon", "apple", "facebook", "google", "leetcode"],
  words2 = ["e", "o"];
console.log(wordSubsets(words1, words2));
