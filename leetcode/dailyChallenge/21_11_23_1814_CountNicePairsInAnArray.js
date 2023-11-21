/**
 * @param {number[]} nums
 * @return {number}
 */
var countNicePairs = function (nums) {
  let ans = 0,
    mp = new Map();
  nums.forEach((num) => updateMap(mp, num));
  mp.forEach((val) => {
    if (val > 1) {
      ans = (ans + (val * (val - 1)) / 2) % 1000000007;
      console.log(val, ans);
    }
  });
  return ans;
};

var updateMap = function (mp, num) {
  const rev = reverse(num);
  const val = num - rev;
  mp.set(val, (mp.get(val) ?? 0) + 1);
};

var reverse = function (num) {
  let x = `${num}`,
    y = "";
  for (let i = x.length - 1; i >= 0; i--) {
    y += x[i];
  }
  return +y;
};

const nums = [42, 11, 1, 97];
console.log(countNicePairs(nums));
