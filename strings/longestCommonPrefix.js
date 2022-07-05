/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
  if (!strs?.length) return "";
  let smallStr = strs[0];
  for (let str of strs) smallStr = str.length < smallStr.length ? str : smallStr;
  let ans = "",
    j = 0;
  for (let j = 0; j < smallStr.length; j++) {
    const currChar = strs[0][j];
    for (let i = 1; i < strs.length; i++) {
      if (strs[i][j] !== currChar) return ans;
    }
    ans += currChar;
  }
  return ans;
};

const strs = ["flower", "flow", "flush"];
console.log(longestCommonPrefix(strs));
