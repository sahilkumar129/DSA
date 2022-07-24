/**
 * @param {number[][]} intervals
 * @return {boolean}
 */
var maxNumberOfConcurrentMeetings = function (intervals) {
  if (!intervals?.length) return 0;
  let num = 0,
    maxNum = 0;
  const start = [],
    end = [];
  intervals.forEach((interval) => {
    start.push(interval[0]);
    end.push(interval[1]);
  });
  start.sort();
  end.sort();
  for (let i = 0, j = 0; i < intervals.length && j < intervals.length; ) {
    if (start[i] < end[j]) {
      num++;
      i++;
    } else {
      num--;
      j++;
    }
    maxNum = Math.max(maxNum, num);
  }
  return maxNum;
};

const intervals = [
  [1, 3],
  [2, 6],
  [5, 7],
];
console.log(maxNumberOfConcurrentMeetings(intervals));
