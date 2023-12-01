/**
 * @param {string[]} word1
 * @param {string[]} word2
 * @return {boolean}
 */
var arrayStringsAreEqual = function (word1, word2) {
  let word1Pointers = { i: 0, j: 0 },
    word2Pointers = { i: 0, j: 0 };
  while (true) {
    word1Next = getNextChar(word1, word1Pointers);
    word2Next = getNextChar(word2, word2Pointers);
    if (word1Next == null && word2Next == null) break;
    if (word1Next != word2Next) return false;
  }
  return true;
};

var getNextChar = function (word, pointers) {
  let returnVal = null;
  if (pointers.i >= word.length) return returnVal;
  returnVal = word[pointers.i][pointers.j];
  if (pointers.j == word[pointers.i].length - 1) {
    pointers.i++;
    pointers.j = 0;
  } else pointers.j++;
  return returnVal;
};

const word1 = ["abc", "d", "defg"],
  word2 = ["abcddefg"];
console.log(arrayStringsAreEqual(word1, word2));
