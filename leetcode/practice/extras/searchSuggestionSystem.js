// var Trie = function () {
//   this.children = new Array(26).fill(null);
//   this.words = [];
// };

// Trie.prototype.addWord = function (word) {
//   let root = this;
//   for (const c of word) {
//     if (!root.children[getCharCode(c)]) root.children[getCharCode(c)] = new Trie();
//     root.words.push(word);
//     root = root.children[getCharCode(c)];
//   }
//   root.words.push(word);
// };

// Trie.prototype.searchWord = function (prefix) {
//   let ans = [],
//     word = "";
//   let root = this;
//   for (const c of prefix) {
//     if (!root.children[getCharCode(c)]) return ans;
//     word += c;
//     root = root.children[getCharCode(c)];
//   }
//   return root.words.slice(0, 3);
// };

// var getCharCode = function (c) {
//   return c.charCodeAt(0) - "a".charCodeAt(0);
// };

// /**
//  * @param {string[]} products
//  * @param {string} searchWord
//  * @return {string[][]}
//  */
// var suggestedProducts = function (products, searchWord) {
//   products.sort();
//   const trie = new Trie();
//   products.forEach((product) => trie.addWord(product));
//   const ans = [];
//   let word = "";
//   for (const c of searchWord) {
//     word += c;
//     ans.push(trie.searchWord(word));
//   }
//   return ans;
// };

/**
 * @param {String} firstWord
 * @param {String} secondWord
 */
const findCommonPrefix = (firstWord, secondWord) => {
  const minLength = Math.min(firstWord.length, secondWord.length);
  for (let i = 0; i < minLength; i++) {
    if (firstWord[i] !== secondWord[i]) {
      return i;
    }
  }
  return minLength;
};

/**
 * @param {string[]} products
 * @param {string} searchWord
 * @return {string[][]}
 */
const suggestedProducts = function (products, searchWord) {
  products.sort();

  const result = Array.from(Array(searchWord.length), () => []);

  for (product of products) {
    const prefixLength = findCommonPrefix(product, searchWord);

    for (let i = 0; i < prefixLength; i++) {
      if (result[i].length < 3) {
        result[i].push(product);
      }
    }
  }

  return result;
};

const products = ["mobile", "mouse", "moneypot", "monitor", "mousepad"],
  searchWord = "mouse";
console.log(suggestedProducts(products, searchWord));
