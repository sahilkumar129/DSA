/**
 * @param {string[]} words
 * @param {string} pattern
 * @return {string[]}
 */
var findAndReplacePattern = function (words, pattern) {
  let ans = [];
  for (const word of words) {
    if (hasSamePattern(word, pattern)) ans.push(word);
  }
  return ans;
};

var hasSamePattern = function (word, pattern) {
  let wordMap = new Map(),
    patternMap = new Map();
  if (word.length !== pattern.length) return false;
  for (let i = 0; i < word.length; i++) {
    if (wordMap.has(word[i]) && wordMap.get(word[i]) !== pattern[i]) return false;
    if (patternMap.has(pattern[i]) && patternMap.get(pattern[i]) !== word[i]) return false;
    wordMap.set(word[i], pattern[i]);
    patternMap.set(pattern[i], word[i]);
  }
  return true;
};

const words = ["abc", "deq", "mee", "aqq", "dkd", "ccc"],
  pattern = "abb";
console.log(findAndReplacePattern(words, pattern));
