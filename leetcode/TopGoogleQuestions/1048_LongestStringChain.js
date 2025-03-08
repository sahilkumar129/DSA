/**
 * @param {string[]} words
 * @return {number}
 */
var longestStrChain = function (words) {
  const dp = new Map();
  words.sort((w1, w2) => w1.length - w2.length);
  for (const word of words) {
    let currMax = 1;
    const wordPredecessors = getPossiblePredecessor(word);
    for (const w of wordPredecessors) {
      currMax = Math.max(currMax, (dp.get(w) ?? 0) + 1);
    }
    dp.set(word, currMax);
  }
  let ans = 1;
  dp.forEach((val) => {
    ans = Math.max(ans, val);
  });
  return ans;
};

var getPossiblePredecessor = function (word) {
  const words = [];
  for (let i = 0; i < word.length; i++) {
    words.push(word.slice(0, i) + word.slice(i + 1));
  }
  return words;
};

const words = ["a", "b", "ba", "bca", "bda", "bdca"];
console.log(longestStrChain(words));
