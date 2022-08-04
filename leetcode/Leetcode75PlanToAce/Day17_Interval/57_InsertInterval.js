/**
 * @param {number[][]} intervals
 * @param {number[]} newInterval
 * @return {number[][]}
 */
var insert = function (intervals, newInterval) {
  let intervalsLength = intervals.length;
  for (let i = 0; i < intervals.length; i++) {
    if (intervals[i][0] >= newInterval[0]) {
      intervals.splice(i, 0, newInterval);
      break;
    }
  }
  if (intervalsLength === intervals.length) intervals.push(newInterval);
  return merge(intervals);
};

var merge = function (intervals) {
  // intervals.sort((a,b) => a[0]-b[0]);
  const result = [intervals[0]];
  for (let i = 1; i < intervals.length; i++) {
    if (result[result.length - 1][1] >= intervals[i][0])
      result[result.length - 1][1] = Math.max(result[result.length - 1][1], intervals[i][1]);
    else result.push(intervals[i]);
  }
  return result;
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
