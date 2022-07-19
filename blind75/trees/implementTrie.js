var Trie = function () {
  this.children = new Map();
  this.endOfWord = false;
};

/**
 * @param {string} word
 * @return {void}
 */
Trie.prototype.insert = function (word) {
  let curr = this;
  for (const c of word) {
    if (!curr.children.has(c)) curr.children.set(c, new Trie());
    curr = curr.children.get(c);
  }
  curr.endOfWord = true;
};

/**
 * @param {string} word
 * @return {boolean}
 */
Trie.prototype.search = function (word) {
  let curr = this;
  for (const c of word) {
    if (!curr.children.get(c)) return false;
    curr = curr.children.get(c);
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
    if (!curr.children.get(c)) return false;
    curr = curr.children.get(c);
  }
  return true;
};

/**
 *
 * @param {*} prefix
 * @return {[string]}
 */
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

/**
 *
 * @param {*} prefix
 * @param {*} root
 * @returns {[string]}
 */
Trie.prototype.wordsStartingWithHelper = function (prefix, root) {
  let ans = [];
  if (root.endOfWord) ans.push(prefix);
  root.children.forEach((value, key) => {
    ans.push(...this.wordsStartingWithHelper(prefix.concat(key), value));
  });
  return ans;
};

Trie.prototype.getAllWords = function () {
  return this.wordsStartingWith("");
};

/**
 * Your Trie object will be instantiated and called as such:
 */
var obj = new Trie();
obj.insert("app");
obj.insert("apple");
console.log(obj.search("app"));
console.log(obj.search("appy"));
obj.insert("bat");
obj.insert("batch");
obj.insert("batman");
console.log(obj.search("batch"));
console.log(obj.startsWith("bat"));
console.log(obj.startsWith("batm"));
console.log(obj.wordsStartingWith("bat"));
console.log(obj.getAllWords());
