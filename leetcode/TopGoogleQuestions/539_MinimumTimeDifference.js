/**
 * @param {string[]} timePoints
 * @return {number}
 */
var findMinDifference = function (timePoints) {
  let ans = 10000,
    timeArr = new Array(1440).fill(0);
  for (const timePoint of timePoints) {
    const mins = getMinutes(timePoint);
    if (timeArr[mins] > 0) return 0;
    timeArr[mins]++;
  }
  let first, curr, next;
  for (let i = 0; i < timeArr.length; i++) {
    if (timeArr[i] != 0) {
      first = i;
      break;
    }
  }
  curr = first;
  for (let i = curr + 1; i < timeArr.length; i++) {
    if (timeArr[i] == 0) continue;
    if (next === undefined) next = i;
    if (curr != undefined && next != undefined) {
      ans = Math.min(ans, next - curr);
      console.log(i, curr, next, ans);
      curr = next;
      next = undefined;
    }
  }
  ans = Math.min(ans, 1440 + first - curr);
  return ans;
};

var getMinutes = function (timePoint) {
  const [hour, minute] = timePoint.split(":").map((n) => +n);
  const minutes = hour * 60 + minute;
  console.log(timePoint, hour, minute, minutes);
  return minutes;
};

const timePoints = ["01:00", "23:59", "00:00"];
console.log(findMinDifference(timePoints));
