/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
  let prefix = "";
  while (strs?.[0]?.[prefix.length]) {
    const c = strs[0][prefix.length];
    for (let i = 1; i < strs.length; i++) {
      if (strs[i].length === prefix.length || strs[i][prefix.length] !== c) return prefix;
    }
    prefix = prefix + c;
  }
  return prefix;
};

const strs = ["flower", "flow", "flight"];
console.log(longestCommonPrefix(strs));
