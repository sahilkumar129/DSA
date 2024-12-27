/**
 * @param {string[]} words
 * @param {string} pattern
 * @return {string[]}
 */
var findAndReplacePattern = function (words, pattern) {
  const ans = words.filter((word) => matchesPattern(word, pattern));
  return ans;
};

var matchesPattern = function (word, pattern) {
  if (word.length != pattern.length) return false;
  const wordMap = new Array(26).fill(-1),
    patternMap = new Array(26).fill(-1);
  for (let i = 0; i < word.length; i++) {
    const wordInd = getCharAt(word[i]),
      patternInd = getCharAt(pattern[i]);
    if (patternMap[wordInd] != -1 || wordMap[patternInd] != -1) {
      if (patternMap[wordInd] != patternInd || wordMap[patternInd] != wordInd) return false;
    } else {
      patternMap[wordInd] = patternInd;
      wordMap[patternInd] = wordInd;
    }
  }
  return true;
};

var getCharAt = function (c) {
  return c.charCodeAt(0) - "a".charCodeAt(0);
};

var matchesPatternMap = function (word, pattern) {
  if (word.length != pattern.length) return false;
  const wordMap = new Map(),
    patternMap = new Map();
  for (let i = 0; i < word.length; i++) {
    if (patternMap.has(word[i]) || wordMap.has(pattern[i])) {
      if (patternMap.get(word[i]) != pattern[i] || wordMap.get(pattern[i]) != word[i]) return false;
    } else {
      patternMap.set(word[i], pattern[i]);
      wordMap.set(pattern[i], word[i]);
    }
  }
  return true;
};

const words = ["abc", "deq", "mee", "aqq", "dkd", "ccc"],
  pattern = "abb";
console.log(findAndReplacePattern(words, pattern));
