/**
 * @param {number[]} nums
 * @return {number[]}
 */
var countSmaller = function (nums) {
  const indArr = [];
  for (let i = 0; i < nums.length; i++) indArr.push([nums[i], i]);
  let ans = new Array(indArr.length).fill(0);
  mergeSort(0, indArr.length - 1, indArr, ans);
  return ans;
};

var mergeSort = function (low, high, nums, ans) {
  if (low === high) return [nums[low]];
  const mid = Math.floor(low + (high - low) / 2);
  const left = mergeSort(low, mid, nums, ans);
  const right = mergeSort(mid + 1, high, nums, ans);
  return merge(left, right, ans);
};

var merge = function (left, right, ans) {
  let result = [],
    carrySum = 0,
    i = 0,
    j = 0;
  while (i < left.length && j < right.length) {
    if (left[i][0] > right[j][0]) {
      result.push(right[j++]);
      carrySum++;
    } else {
      ans[left[i][1]] += carrySum;
      result.push(left[i++]);
    }
  }
  while (i < left.length) {
    ans[left[i][1]] += carrySum;
    result.push(left[i++]);
  }
  while (j < right.length) {
    result.push(right[j++]);
  }
  return result;
};

const nums = [5, 2, 6, 1];
console.log(countSmaller(nums));
