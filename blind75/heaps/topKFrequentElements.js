/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function (nums, k) {
  const countMap = new Map();
  nums.forEach((num) => {
    const numCount = countMap.get(num) ?? 0;
    countMap.set(num, numCount + 1);
  });
  const countArr = [];
  for (let i = 0; i < nums.length; i++) countArr.push([]);
  countMap.forEach((value, key) => {
    countArr[value - 1].push(key);
  });
  const res = [];
  let leftK = k;
  for (let i = countArr.length - 1; i >= 0; i--) {
    if (countArr[i].length) {
      res.push(...countArr[i].splice(0, leftK));
      leftK = k - res.length;
    }
  }
  return res;
};

const nums = [3, 2, 3, 1, 2, 4, 5, 5, 6, 7, 7, 8, 2, 3, 1, 1, 1, 10, 11, 5, 6, 2, 4, 7, 8, 5, 6],
  k = 10;
console.log(topKFrequent(nums, k));
