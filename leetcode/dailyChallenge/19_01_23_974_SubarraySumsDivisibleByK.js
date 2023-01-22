/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var subarraysDivByK = function (nums, k) {
  let currSum = 0,
    prefixSum = [],
    ans = 0,
    map = new Map();
  for (const num of nums) {
    currSum += num;
    prefixSum.push(currSum);
  }
  for (let i = 0; i < nums.length; i++) {
    const mod = ((prefixSum[i] % k) + k) % k;
    map.set(mod % k, (map.get(mod % k) ?? 0) + 1);
  }
  for (const [key, value] of map) {
    ans += (value * (value + 1)) / 2 - (key === 0 ? 0 : value);
  }
  return ans;
};

const nums = [4, 5, 0, -2, -3, 1],
  k = 5;
console.log(subarraysDivByK(nums, k));
