/**
 * @param {string} beginWord
 * @param {string} endWord
 * @param {string[]} wordList
 * @return {string[][]}
 */
var findLadders = function (beginWord, endWord, wordList) {
  const wordSet = new Set(wordList),
    neighborWordsMap = new Map();
  if (!wordSet.has(endWord)) return [];
  [...wordList, beginWord].forEach((word) =>
    neighborWordsMap.set(word, findNeighbors(word, wordSet))
  );

  const visited = new Set(),
    paths = [],
    stack = [[beginWord]];

  while (stack.length > 0) {
    const stackLength = stack.length;
    for (let i = 0; i < stackLength; i++) {
      const path = stack.shift();
      const lastWord = path[path.length - 1];
      if (lastWord == endWord) {
        paths.push(path);
        continue;
      }
      visited.add(lastWord);
      for (const neighbor of neighborWordsMap.get(lastWord)) {
        if (!visited.has(neighbor)) stack.push([...path, neighbor]);
      }
    }
    if (paths.length) return paths;
  }

  return paths;
};

var findNeighbors = function (word, wordSet) {
  const neighbors = [];
  for (let i = 0; i < word.length; i++) {
    for (let j = 0; j < 26; j++) {
      let possibleWord = word.slice(0, i) + String.fromCharCode(j + 97) + word.slice(i + 1);
      if (wordSet.has(possibleWord) && possibleWord !== word) neighbors.push(possibleWord);
    }
  }
  return neighbors;
};

const beginWord = "hit",
  endWord = "cog",
  wordList = ["hot", "dot", "dog", "lot", "log", "cog"];
console.log(findLadders(beginWord, endWord, wordList));
