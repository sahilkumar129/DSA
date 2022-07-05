/**
 * @param {number[][]} intervals
 * @param {number[]} newInterval
 * @return {number[][]}
 */
var insert = function (intervals, newInterval) {
  let i;
  // insert new Interval into intervals in order
  for (i = 0; i < intervals.length; i++) {
    if (intervals[i][0] > newInterval[0]) break;
  }
  intervals.splice(i, 0, newInterval);

  // merge overlapped intervals
  let ans = [intervals[0]];
  for (i = 1; i < intervals.length; i++) {
    if (ans[ans.length - 1][1] >= intervals[i][0])
      ans[ans.length - 1][1] = Math.max(ans[ans.length - 1][1], intervals[i][1]);
    else ans.push(intervals[i]);
  }
  return ans;
};

const intervals = [
    [1, 2],
    [3, 5],
    [6, 7],
    [8, 10],
    [12, 16],
  ],
  newInterval = [4, 8];
console.log(insert(intervals, newInterval));
