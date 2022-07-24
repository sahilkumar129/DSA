/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function (nums) {
  const numsSet = new Set();
  for (const num of nums) {
    if (numsSet.has(num)) return true;
    numsSet.add(num);
  }
  return false;
};

const nums = [1, 2, 3, 4];
console.log(containsDuplicate(nums));
