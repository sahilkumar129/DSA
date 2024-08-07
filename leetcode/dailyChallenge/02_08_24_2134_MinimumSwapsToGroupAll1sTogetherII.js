/**
 * @param {number[]} nums
 * @return {number}
 */
var minSwaps = function (nums) {
  const oneCount = countOne(nums);
  if (oneCount < 2) return 0;
  let i = 0,
    j = 0,
    zeroCount = 0,
    ans = nums.length;
  for (; j < oneCount; j++) if (nums[j] === 0) zeroCount++;
  j--;
  while (true) {
    console.log(i,j,zeroCount);
    ans = Math.min(ans, zeroCount);
    if (nums[i] === 0) zeroCount--;
    i++;
    if (i >= nums.length) break;
    j = (j + 1) % nums.length;
    if (nums[j] === 0) zeroCount++;
  }
  return ans;
};

var countOne = function (nums) {
  let ones = 0;
  nums.forEach((num) => {
    if (num) ones++;
  });
  return ones;
};

const nums = [0, 1, 0, 1, 1, 0, 0];
console.log(minSwaps(nums));
