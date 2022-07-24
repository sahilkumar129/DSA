/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
const twoSum = function (nums, target) {
  const numsMap = new Map(nums.map((num, index) => [num, index]));
  for (let i = 0; i < nums.length; i++) {
    const secondNum = target - nums[i];
    if (numsMap.has(secondNum) && i != numsMap.get(secondNum)) {
      return [i, numsMap.get(secondNum)];
    }
  }
};

const nums = [2, 7, 11, 15],
  target = 9;
console.log(twoSum(nums, target));
