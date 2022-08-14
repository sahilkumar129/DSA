/**
 * @param {number[]} nums
 * @param {number} k
 * @param {number} p
 * @return {number}
 */
var countDistinct = function (nums, k, p) {
  let ans = 0;
  const divArr = getDivArray(nums, p),
    visSet = new Set();
  for (let i = 0; i < nums.length; i++) {
    let curr = "",
      count = 0;
    for (let j = i; j < nums.length; j++) {
      curr += nums[j] + ",";
      if (divArr[j]) {
        count++;
        if (count <= k) {
          if (visSet.has(curr)) continue;
          visSet.add(curr);
          ans++;
        } else break;
      } else {
        if (visSet.has(curr)) continue;
        visSet.add(curr);
        ans++;
      }
    }
  }
  return ans;
};

var getDivArray = function (nums, p) {
  const divArr = [...nums];
  for (let i = 0; i < divArr.length; i++) divArr[i] = !(divArr[i] % p);
  return divArr;
};

const nums = [1, 2, 3, 4],
  k = 4,
  p = 1;
console.log(countDistinct(nums, k, p));
