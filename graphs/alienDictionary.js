var createAdjList = function (words) {
  const adjList = new Map();
  words.forEach((word) => {
    for (const c of word) adjList.set(c, new Set());
  });
  for (let i = 0; i < words.length - 1; i++) {
    const [word1, word2] = [words[i], words[i + 1]];
    const minLength = Math.min(word1.length, word2.length);
    if (word1.length > minLength && word1.substr(0, minLength) === word2) return false;
    for (let j = 0; j < minLength; j++)
      if (word1[j] != word2[j]) adjList.get(word1[j]).add(word2[j]);
  }
  return adjList;
};

var alienDictionary = function (words) {
  const adj = createAdjList(words),
    res = [],
    visited = new Map(); // False: Visited, True: Visted and in current path(cycle)
  if (!adj) return "";

  const dfs = function (c) {
    if (visited.has(c)) visited.has(c);
    visited.set(c, true);
    for (const nei of adj.get(c).values()) if (dfs(nei)) return true;
    visited.set(c, false);
    res.push(c);
  };
  for (const c of adj.keys()) if (dfs(c)) return "";
  res.reverse();
  return res;
};

const words = ["wrt", "wrf", "er", "ett", "rftt"];
console.log(alienDictionary(words));
