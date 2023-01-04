/**
 * @param {number[]} tasks
 * @return {number}
 */
var minimumRounds = function (tasks) {
  let curr,
    ans = 0,
    countMap = new Map();
  for (const task of tasks) countMap.set(task, (countMap.get(task) ?? 0) + 1);
  for (const [_, value] of countMap) {
    curr = getRounds(value);
    // console.log(_, value, curr);
    if (curr === -1) return -1;
    ans += curr;
  }
  return ans;
};

var getRounds = function (value) {
  if (value < 2) return -1;
  const threeSteps = Math.floor(value / 3);
  if (value % 3 === 0) return threeSteps;
  if (value % 3 === 1) if ((value - 1) % 3 !== 0) return -1;
  return threeSteps + 1;
};

const tasks = [2, 2, 3, 3, 2, 4, 4, 4, 4, 4];
console.log(minimumRounds(tasks));
