/**
 * @param {string} s
 * @return {string[]}
 */
var restoreIpAddresses = function (s) {
  let ans = [];
  const dfs = function (i, str, left, curr) {
    if (i > s.length || left < 0) return;
    if (i === s.length && left === 0 && isValid(str)) {
      ans.push(curr + str);
      return;
    }
    if (isValid(str)) dfs(i, "", left - 1, curr + str + ".");
    if (isValid(str + s[i])) dfs(i + 1, str + s[i], left, curr);
  };
  dfs(0, "", 3, "");
  return ans;
};

var isValid = function (str) {
  if (!str?.length) return false;
  return str.length === 1 || (str[0] !== "0" && +str < 256);
};

const s = "101023";
console.log(restoreIpAddresses(s));
