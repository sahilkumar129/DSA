/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDuplicates = function (nums) {
  let i = 0,
    duplicates = new Set();
  while (i < nums.length) {
    if (nums[i] == i + 1) i++;
    else if (nums[i] != nums[nums[i] - 1]) swap(nums, i, nums[i] - 1);
    else {
      duplicates.add(nums[i]);
      i++;
    }
  }
  return Array.from(duplicates);
};

var swap = function (arr, i, j) {
  let temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
};

const nums = [1, 2, 3, 4, 3, 2, 7, 8];
console.log(findDuplicates(nums));
