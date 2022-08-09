/**
 * @param {number[]} arr
 * @return {number}
 */
var numFactoredBinaryTrees = function (arr) {
  let ans = 0;
  arr.sort((a, b) => a - b);
  const MOD = 1000000007,
    map = new Map();
  for (let i = 0; i < arr.length; i++) {
    let num = arr[i],
      ways = 1,
      lim = Math.sqrt(num);
    for (let j = 0, fA = arr[0]; fA <= lim; fA = arr[++j]) {
      let fB = num / fA;
      if (map.has(fB)) ways = (ways + map.get(fA) * map.get(fB) * (fA === fB ? 1 : 2)) % MOD;
    }
    map.set(num, ways);
    ans = (ans + ways) % MOD;
  }
  return ans;
};

const arr = [2, 3, 5, 6, 20, 22, 11, 10, 13, 26];
console.log(numFactoredBinaryTrees(arr));
