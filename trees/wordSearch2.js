const Trie = function () {
  this.children = new Map();
  this.endOfWord = false;
};

Trie.prototype.addWord = function (word) {
  let curr = this;
  for (const c of word) {
    if (!curr.children.has(c)) curr.children.set(c, new Trie());
    curr = curr.children.get(c);
  }
  curr.endOfWord = true;
};

Trie.prototype.wordsStartingWith = function (prefix) {
  let curr = this;
  let ans = [];
  for (const c of prefix) {
    if (!curr.children.get(c)) return ans;
    curr = curr.children.get(c);
  }
  ans.push(...this.wordsStartingWithHelper(prefix, curr));
  return ans;
};

Trie.prototype.wordsStartingWithHelper = function (prefix, root) {
  let ans = [];
  if (root.endOfWord) ans.push(prefix);
  root.children.forEach((value, key) => {
    ans.push(...this.wordsStartingWithHelper(prefix.concat(key), value));
  });
  return ans;
};

Trie.prototype.searchPrefixWord = function (curr, c) {
  if (!curr.children.has(c)) return { isPrefix: false, isWord: false, newRoot: curr };
  curr = curr.children.get(c);
  return { isPrefix: true, isWord: curr.endOfWord, newRoot: curr };
};

/**
 * @param {character[][]} board
 * @param {string[]} words
 * @return {string[]}
 */
var findWords = function (board, words) {
  const trie = createTrie(words);
  const visited = new Set();
  const res = new Set();
  const dfs = function (root, i, j, prefix) {
    if (
      i < 0 ||
      i >= board.length ||
      j < 0 ||
      j >= board[i].length ||
      !root.children.has(board[i][j]) ||
      visited.has(`${i}-${j}`)
    )
      return;
    const c = board[i][j];
    root = root.children.get(c);
    prefix = prefix.concat(c);
    if (root.endOfWord) res.add(prefix);
    visited.add(`${i}-${j}`);
    dfs(root, i - 1, j, prefix);
    dfs(root, i + 1, j, prefix);
    dfs(root, i, j - 1, prefix);
    dfs(root, i, j + 1, prefix);
    visited.delete(`${i}-${j}`);
  };
  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[i].length; j++) {
      dfs(trie, i, j, "");
    }
  }
  const result = [];
  for (const value of res.values()) result.push(value);
  return result;
};

var createTrie = function (words) {
  const trie = new Trie();
  for (const word of words) trie.addWord(word);
  return trie;
};

const board = [
    ["o", "a", "b", "n"],
    ["o", "t", "a", "e"],
    ["a", "h", "k", "r"],
    ["a", "f", "l", "v"],
  ],
  words = ["oa", "oaa"];
console.log(findWords(board, words));
