/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 *
 * Recursive Solution
 */
// var wordBreak = function(s, wordDict) {
//     let dictSet = new Set();
//     const dp = new Array(s.length).fill(-1);
//     wordDict.forEach(wd => dictSet.add(wd));
//     const dfs = function(startIndex) {
//         if(startIndex>=s.length) return true;
//         if(dp[startIndex] != -1) return dp[startIndex];
//         let currWord='';
//         for(let i=startIndex;i<s.length;i++) {
//             currWord += s[i];
//             if(dictSet.has(currWord)) {
//                 const subsetBreak = dfs(i+1);
//                 if(subsetBreak) {
//                     dp[startIndex] = 1;
//                     return true;
//                 }
//             }

//         }
//         dp[startIndex] = 0;
//         return false;
//     }
//     return dfs(0);
// };

// Bottom Up Approach
var wordBreak = function (s, wordDict) {
  let dictSet = new Set();
  const dp = new Array(s.length + 1).fill(false);
  wordDict.forEach((wd) => dictSet.add(wd));
  dp[s.length] = true;
  for (let i = s.length - 1; i >= 0; i--) {
    let currWord = "";
    for (let j = i; j < s.length; j++) {
      currWord += s[j];
      if (dictSet.has(currWord) && dp[j + 1]) {
        dp[i] = true;
        break;
      }
    }
  }
  return dp[0];
};

const s = "catsandog",
  wordDict = ["cats", "dog", "sand", "and", "cat"];
console.log(wordBreak(s, wordDict));
