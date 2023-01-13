/**
 * @param {number[]} parent
 * @param {string} s
 * @return {number}
 */
var longestPath = function (parent, s) {
  let maxPathLen = 1;
  const adjList = createAdjList(parent);
  const dfs = function (ind) {
    let longestChain = 0,
      secondLongestChain = 0;
    for (const val of adjList[ind]) {
      const longestChainStartingFromChild = dfs(val);
      if (s[ind] === s[val]) continue;
      if (longestChainStartingFromChild > longestChain) {
        secondLongestChain = longestChain;
        longestChain = longestChainStartingFromChild;
      } else if (longestChainStartingFromChild > secondLongestChain) {
        secondLongestChain = longestChainStartingFromChild;
      }
    }
    maxPathLen = Math.max(maxPathLen, longestChain + secondLongestChain + 1);
    return longestChain + 1;
  };
  dfs(0);
  return maxPathLen;
};

var createAdjList = function (parent) {
  const adjList = new Array(parent.length).fill(0).map((x) => []);
  for (let i = 1; i < parent.length; i++) adjList[parent[i]].push(i);
  return adjList;
};

const parent = [-1, 0, 0, 1, 1, 2],
  s = "abacbe";
console.log(longestPath(parent, s));
