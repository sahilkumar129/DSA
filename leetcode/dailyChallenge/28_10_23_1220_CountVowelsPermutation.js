/**
 * @param {number} n
 * @return {number}
 */
var countVowelPermutation = function (n) {
  const vowels = ["a", "e", "i", "o", "u"];
  const dp = new Map();
  vowels.forEach((v) => {
    let arr = [];
    for (let j = 0; j <= n; j++) {
      arr.push(-1);
    }
    dp.set(v, arr);
  });
  let ans = 0;
  vowels.forEach((vowel) => {
    ans = (ans + helper(vowel, n - 1, dp)) % 1000000007;
  });
  return ans;
};

var helper = function (prev, n, dp) {
  if (n == 0) return 1;
  if (dp.get(prev)[n] != -1) return dp.get(prev)[n];
  let ans = 0;
  const next = getNextPossibleVowels(prev);
  next.forEach((nv) => {
    ans = (ans + helper(nv, n - 1, dp)) % 1000000007;
  });
  dp.get(prev)[n] = ans;
  return ans;
};

var getNextPossibleVowels = function (prev) {
  if (prev == "a") return ["e"];
  if (prev == "e") return ["a", "i"];
  if (prev == "i") return ["a", "e", "o", "u"];
  if (prev == "o") return ["i", "u"];
  if (prev == "u") return ["a"];
};

const n = 1000;
console.log(countVowelPermutation(n));
