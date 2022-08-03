var Trie = function () {
  this.childrens = new Map();
  this.words = [];
  this.endOfWord = false;
};

/**
 * @param {string} word
 * @return {void}
 */
Trie.prototype.insert = function (word) {
  let curr = this;
  for (const c of word) {
    if (!curr.childrens.has(c)) curr.childrens.set(c, new Trie());
    curr.words.push(word);
    curr = curr.childrens.get(c);
  }
  curr.words.push(word);
  curr.endOfWord = true;
};

/**
 * @param {string} word
 * @return {boolean}
 */
Trie.prototype.search = function (word) {
  let curr = this;
  for (const c of word) {
    if (!curr.childrens.has(c)) return false;
    curr = curr.childrens.get(c);
  }
  return curr.endOfWord;
};

/**
 * @param {string} prefix
 * @return {boolean}
 */
Trie.prototype.startsWith = function (prefix) {
  let curr = this;
  for (const c of prefix) {
    if (!curr.childrens.has(c)) return [];
    curr = curr.childrens.get(c);
  }
  return curr.words;
};

const trie = new Trie();
trie.insert("apple");
console.log(trie.search("apple")); // return True
console.log(trie.search("app")); // return False
trie.startsWith("app"); // return True
trie.insert("app");
console.log(trie.search("app")); // return True
