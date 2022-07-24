/**
 * @param {string[]} strs
 * @return {string[][]}
 * O(n.d.log(d))
 */
// var groupAnagrams = function (strs) {
//   const sortedStrs = strs.map((str) => str.split("").sort().join(""));
//   const anagramMap = new Map();
//   for (let i = 0; i < strs.length; i++)
//     anagramMap.set(sortedStrs[i], (anagramMap.get(sortedStrs[i]) ?? []).concat(strs[i]));
//   const ans = [];
//   for (const value of anagramMap.values()) ans.push(value);
//   return ans;
// };

// O(n.d)
var groupAnagrams = function (strs) {
  const resMap = new Map();
  for (const str of strs) {
    const count = new Array(26).fill(0);
    for (const c of str) count[c.charCodeAt(0) - "a".charCodeAt(0)]++;
    resMap.set(count.join(","), (resMap.get(count.join(",")) ?? []).concat(str));
  }
  const ans = [];
  for (const value of resMap.values()) ans.push(value);
  return ans;
};

const strs = ["eat", "tea", "tan", "ate", "nat", "bat"];
console.log(groupAnagrams(strs));
