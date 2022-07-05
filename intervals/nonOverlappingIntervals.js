/**
 * @param {number[][]} intervals
 * @return {number}
 */
var eraseOverlapIntervals = function (intervals) {
  if (!intervals?.length) return 0;
  intervals.sort((a, b) => a[0] - b[0]);
  let prevEnd = intervals[0][1],
    ans = 0;
  for (let i = 1; i < intervals.length; i++) {
    if (intervals[i][0] < prevEnd) {
      ans++;
      prevEnd = Math.min(prevEnd, intervals[i][1]);
    } else prevEnd = intervals[i][1];
  }
  return ans;
};

const intervals = [
  [1, 4],
  [2, 3],
  [3, 4],
  [-100, -2],
  [5, 7],
];
console.log(eraseOverlapIntervals(intervals));
