/**
 * @param {number[][]} intervals
 * @return {boolean}
 */
var canAttendAllMeetings = function (intervals) {
  if (!intervals?.length) return 0;
  intervals.sort((a, b) => a[0] - b[0]);
  let prevEnd = intervals[0][1];
  for (let i = 1; i < intervals.length; i++) {
    if (intervals[i][0] < prevEnd) return false;
    else prevEnd = Math.max(prevEnd, intervals[i][1]);
  }
  return true;
};

const intervals = [
  [1, 2],
  [2, 3],
  [4, 7],
];
console.log(canAttendAllMeetings(intervals));
