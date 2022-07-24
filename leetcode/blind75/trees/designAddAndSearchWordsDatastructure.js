var WordDictionary = function () {
  this.children = new Map();
  this.endOfWord = false;
};

/**
 * @param {string} word
 * @return {void}
 */
WordDictionary.prototype.addWord = function (word) {
  let curr = this;
  for (const c of word) {
    if (!curr.children.has(c)) curr.children.set(c, new WordDictionary());
    curr = curr.children.get(c);
  }
  curr.endOfWord = true;
};

/**
 * @param {string} word
 * @return {boolean}
 */
WordDictionary.prototype.search = function (word) {
  const dfs = function (curr, j) {
    for (let i = j; i < word.length; i++) {
      if (word[i] == ".") {
        for (const next of curr.children.values()) {
          if (dfs(next, i + 1)) return true;
        }
        return false;
      } else if (!curr.children.has(word[i])) return false;
      curr = curr.children.get(word[i]);
    }
    return curr.endOfWord;
  };
  return dfs(this, 0);
};

/**
 * Your WordDictionary object will be instantiated and called as such:
 */

const obj = new WordDictionary();
obj.addWord("bat");
obj.addWord("batman");
obj.addWord("batvan");
console.log(obj.search("bat"));
console.log(obj.search("batwoman"));
console.log(obj.search("bat.an"));
