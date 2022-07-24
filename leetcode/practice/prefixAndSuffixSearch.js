// var TrieNode = function () {
//   this.children = new Map();
//   this.maxId = -1; // To store max index of words having this as prefix-suffix combination
// };

// TrieNode.prototype.add = function (word, index) {
//   let root = this;
//   for (const c of word) {
//     if (!root.children.has(c)) root.children.set(c, new TrieNode());
//     root = root.children.get(c);
//   }
//   root.maxId = index;
// };

// TrieNode.prototype.query = function (word) {
//   let root = this;
//   for (const c of word) {
//     if (!root.children.has(c)) return -1;
//     root = root.children.get(c);
//   }
//   return root.maxId;
// };

// /**
//  * @param {string[]} words
//  */
// var WordFilter = function (words) {
//   this.tree = new TrieNode();
//   words.forEach((word, index) => {
//     let prefix = "";
//     for (let i = 0; i < word.length; i++) {
//       let suffix = "";
//       prefix += word[i];
//       for (let j = word.length - 1; j >= 0; j--) {
//         suffix = word[j] + suffix;
//         this.tree.add(`${prefix}-${suffix}`, index);
//       }
//     }
//   });
//   // console.log(this.tree);
// };

// /**
//  * @param {string} prefix
//  * @param {string} suffix
//  * @return {number}
//  */
// WordFilter.prototype.f = function (prefix, suffix) {
//   return this.tree.query(`${prefix}-${suffix}`);
// };

/**
 * @param {string[]} words
 */
var WordFilter = function (words) {
  // this.tree = new TrieNode();
  this.map = new Map();
  words.forEach((word, index) => {
    let prefix = "";
    for (let i = 0; i < word.length; i++) {
      let suffix = "";
      prefix += word[i];
      for (let j = word.length - 1; j >= 0; j--) {
        suffix = word[j] + suffix;
        this.map.set(`${prefix}-${suffix}`, index);
      }
    }
  });
};

WordFilter.prototype.f = function (prefix, suffix) {
  return this.map.get(`${prefix}-${suffix}`) ?? -1;
};

/**
 * Your WordFilter object will be instantiated and called as such:
 * var obj = new WordFilter(words)
 * var param_1 = obj.f(prefix,suffix)
 */

const words = [
  "cabaabaaaa",
  "ccbcababac",
  "bacaabccba",
  "bcbbcbacaa",
  "abcaccbcaa",
  "accabaccaa",
  "cabcbbbcca",
  "ababccabcb",
  "caccbbcbab",
  "bccbacbcba",
];
const obj = new WordFilter(words);
let [prefix, suffix] = ["bcbb", "aa"];
console.log(obj.f(prefix, suffix));

// ["WordFilter","f","f","f","f","f","f","f","f","f","f"]
// [[["cabaabaaaa","ccbcababac","bacaabccba","bcbbcbacaa","abcaccbcaa","accabaccaa","cabcbbbcca","ababccabcb","caccbbcbab","bccbacbcba"]],["bccbacbcba","a"],["ab","abcaccbcaa"],["a","aa"],["cabaaba","abaaaa"],["cacc","accbbcbab"],["ccbcab","bac"],["bac","cba"],["ac","accabaccaa"],["bcbb","aa"],["ccbca","cbcababac"]]
