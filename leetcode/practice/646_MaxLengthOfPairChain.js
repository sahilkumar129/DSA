/** Solution 1: DP Approach
 * @param {number[][]} pairs
 * @return {number}
 */
var findLongestChainDP = function (pairs) {
  const maxLengthDp = new Array(pairs.length).fill(0).map((_) => new Map());
  pairs.sort((a, b) => a[1] - b[1]);
  return longestChain(pairs, 0, null, maxLengthDp);
};

var longestChainDp = function (pairs, i, prevEnd, maxLengthDp) {
  if (i === pairs.length) return 0;
  if (maxLengthDp[i].has(prevEnd)) return maxLengthDp[i].get(prevEnd);

  let chose = 0,
    left = 0;
  if (prevEnd == null || prevEnd < pairs[i][0])
    chose = 1 + longestChain(pairs, i + 1, pairs[i][1], maxLengthDp);
  left = longestChain(pairs, i + 1, prevEnd, maxLengthDp);

  const currMax = Math.max(chose, left);
  maxLengthDp[i].set(prevEnd, currMax);
  return currMax;
};

/** Solution 2: Greedy Approach with recursion
 * @param {number[][]} pairs
 * @return {number}
 */
var findLongestChainGreedyRecursion = function (pairs) {
  pairs.sort((a, b) => a[1] - b[1]);
  return longestChain(pairs, 0, null);
};

var longestChainGreedy = function (pairs, i, prevEnd, maxLengthDp) {
  if (i === pairs.length) return 0;

  let chose = 0,
    left = 1;
  if (prevEnd == null || prevEnd < pairs[i][0])
    chose = 1 + longestChain(pairs, i + 1, pairs[i][1], maxLengthDp);
  else left = longestChain(pairs, i + 1, prevEnd, maxLengthDp);

  return Math.max(chose, left);
};

/** Solution 3: Greedy Approach without recursion
 * @param {number[][]} pairs
 * @return {number}
 */
var findLongestChainGreedy = function (pairs) {
  pairs.sort((a, b) => a[1] - b[1]);
  let max = 1,
    prevEnd = pairs[0][1];
  for (let i = 1; i < pairs.length; i++) {
    if (pairs[i][0] > prevEnd) {
      max++;
      prevEnd = pairs[i][1];
    }
  }
  return max;
};

const pairs = [
  [1, 2],
  [7, 8],
  [4, 5],
  [2, 8],
  [5, 9],
  [10, 15],
  [7, 14],
];
console.log(findLongestChainGreedy(pairs));
