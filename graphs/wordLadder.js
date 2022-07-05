/**
 * @param {string} beginWord
 * @param {string} endWord
 * @param {string[]} wordList
 * @return {number}
 */
var ladderLength = function (beginWord, endWord, wordList) {
  let ans = 1,
    stack = [beginWord];
  const visited = new Set(),
    wordSet = new Set(wordList);
  while (stack.length > 0) {
    const currStack = stack;
    stack = [];
    // console.log(currStack);
    while (currStack.length > 0) {
      const curr = currStack.pop();
      if (curr == endWord) return ans;
      visited.add(curr);
      stack.push(...findNeighbors(curr, wordSet, visited));
    }
    ans++;
  }
  return 0;
};

var findNeighbors = function (word, wordSet, visited) {
  const neighbors = [];
  for (let i = 0; i < word.length; i++) {
    for (let j = 0; j < 26; j++) {
      let possibleWord = word.slice(0, i) + String.fromCharCode(j + 97) + word.slice(i + 1);
      // console.log(possibleWord);
      if (wordSet.has(possibleWord) && !visited.has(possibleWord) && possibleWord !== word)
        neighbors.push(possibleWord);
    }
  }
  return neighbors;
};

const beginWord = "hit",
  endWord = "cog",
  wordList = ["hot", "dot", "dog", "lot", "log", "cog"];
console.log(ladderLength(beginWord, endWord, wordList));
