/**
 * @param {string[]} garbage
 * @param {number[]} travel
 * @return {number}
 */
var garbageCollection = function (garbage, travel) {
  let n = garbage.length,
    ans = 0,
    count = [0, 0, 0];
  for (let i = n - 1; i >= 0; i--) {
    for (let j = 0; j < garbage[i].length; j++) {
      count[getInd(garbage[i][j])]++;
    }
    count.forEach((c) => {
      if (c > 0 && i > 0) ans += travel[i - 1];
    });
  }
  ans += count.reduce((a, b) => a + b);
  return ans;
};

var getInd = function (char) {
  return char == "P" ? 0 : char == "M" ? 1 : 2;
};

const garbage = ["G", "P", "GP", "GG"],
  travel = [2, 4, 3];
console.log(garbageCollection(garbage, travel));
