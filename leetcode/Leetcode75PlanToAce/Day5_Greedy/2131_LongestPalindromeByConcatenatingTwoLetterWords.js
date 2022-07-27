/**
 * @param {string[]} words
 * @return {number}
 */
var longestPalindrome = function (words) {
  let ans = 0,
    centerPicked = false;
  const countMap = new Map();
  for (const word of words) countMap.set(word, (countMap.get(word) ?? 0) + 1);
  countMap.forEach((count, word) => {
    const reverseWord = `${word[1]}${word[0]}`;
    if (word === reverseWord) {
      ans += Math.floor(count / 2) * 2;
      if (!centerPicked && count % 2) {
        ans += 1;
        centerPicked = true;
      }
    } else {
      ans += Math.min(count, countMap.get(reverseWord) ?? 0) * 2;
      countMap.delete(reverseWord);
    }
    countMap.delete(word);
  });
  return ans * 2;
};

const words = ["dd", "aa", "bb", "dd", "aa", "dd", "bb", "dd", "aa", "cc", "bb", "cc", "dd", "cc"];
console.log(longestPalindrome(words));
