/**
 * @param {string[]} startWords
 * @param {string[]} targetWords
 * @return {number}
 */
var wordCount = function (startWords, targetWords) {
  let ans = 0;
  const wordSet = new Set();
  for (const word of startWords) wordSet.add(getWordCountMask(word));
  for (const word of targetWords) {
    const tWordCount = getWordCountMask(word);
    for (const c of word) {
      const str = tWordCount & ~(1 << getCharCode(c));
      if (wordSet?.has(str)) {
        ans++;
        break;
      }
    }
  }
  return ans;
};

var getWordCountMask = function (word) {
  let w = 0;
  for (const c of word) w = w | (1 << getCharCode(c));
  return w;
};

var getCharCode = function (c) {
  return c.charCodeAt(0) - "a".charCodeAt(0);
};

const startWords = ["ant", "act", "tack"],
  targetWords = ["tack", "act", "acti"];
console.log(wordCount(startWords, targetWords));
