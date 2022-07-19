/**
 * @param {string[]} words
 * @return {number}
 */
var longestStrChain = function (words) {
  words.sort((a, b) => a.length - b.length);
  const dp = new Array(words.length).fill(1);
  for (let i = words.length - 2; i >= 0; i--) {
    let max = 0;
    for (let j = i + 1; j < words.length; j++) {
      if (words[j].length == words[i].length) continue;
      if (words[j].length - words[i].length > 1) break;
      if (isPredecessor(words[j], words[i])) max = Math.max(max, dp[j]);
    }
    dp[i] += max;
  }
  let ans = 1;
  for (let val of dp) ans = Math.max(ans, val);
  return ans;
};

var intitalizeDp = function (words) {
  const dp = [];
  for (let i = 0; i < words.length; i++) {
    const row = [];
    for (let j = 0; j < words.length; j++) {
      row.push(0);
    }
    dp.push(row);
  }
  return dp;
};

var isPredecessor = function (successor, predecessor) {
  let diff = 0;
  if (predecessor.length !== successor.length - 1) return false;
  for (let i = 0, j = 0; i < predecessor.length; j++) {
    if (predecessor[i] !== successor[j]) {
      diff++;
      if (diff > 1) return false;
    } else i++;
  }
  return true;
};

const str = ["a", "ab", "ac", "bd", "abc", "abd", "abdd"];
console.log(longestStrChain(str));
