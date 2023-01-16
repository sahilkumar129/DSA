/**
 * @param {number[][]} intervals
 * @param {number[]} newInterval
 * @return {number[][]}
 */
var insert = function (intervals, newInterval) {
  intervals.push(newInterval);
  intervals.sort((a, b) => a[0] - b[0]);
  return mergeOverlapping(intervals);
};

var mergeOverlapping = function (intervals) {
  let curr = 0;
  for (let i = 1; i < intervals.length; i++) {
    if (intervals[curr][1] >= intervals[i][0]) {
      intervals[curr][1] = Math.max(intervals[curr][1], intervals[i][1]);
    } else {
      curr++;
      intervals[curr] = intervals[i];
    }
  }
  return intervals.slice(0, curr + 1);
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
