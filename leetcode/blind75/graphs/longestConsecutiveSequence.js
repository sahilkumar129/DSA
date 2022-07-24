/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function (nums) {
  let set = new Set(nums),
    result = 0;
  while (set.size) {
    const num = set.values().next().value;
    let sum = 0,
      temp = num;
    while (set.has(temp)) {
      set.delete(temp);
      sum++;
      temp--;
    }
    temp = num + 1;
    while (set.has(temp)) {
      set.delete(temp);
      sum++;
      temp++;
    }
    result = Math.max(sum, result);
  }
  return result;
};

const nums = [100, 4, 200, 1, 3, 2];
console.log(longestConsecutive(nums));
