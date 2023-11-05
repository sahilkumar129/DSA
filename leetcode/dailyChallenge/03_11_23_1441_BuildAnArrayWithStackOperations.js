/**
 * @param {number[]} target
 * @param {number} n
 * @return {string[]}
 */
var buildArray = function (target, n) {
  const ans = [];
  let j = 1;
  for (let i = 0; i < target.length; i++) {
    if (j < target[i]) {
      while (j < target[i]) {
        ans.push("Push");
        ans.push("Pop");
        j++;
      }
    }
    ans.push("Push");
    j++;
  }
  return ans;
};

const target = [1, 3],
  n = 3;
console.log(buildArray(target, n));
