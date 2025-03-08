/**
 * @param {number} startAt
 * @param {number} moveCost
 * @param {number} pushCost
 * @param {number} targetSeconds
 * @return {number}
 */
var minCostSetTime = function (startAt, moveCost, pushCost, targetSeconds) {
  let ans = 1000000;
  const possibleTimes = getPossibleTimes(targetSeconds);
  for (const time of possibleTimes) {
    ans = Math.min(ans, getCost(time, startAt, moveCost, pushCost));
  }
  return ans;
};

var getPossibleTimes = function (seconds) {
  const times = [];
  let min = Math.floor(seconds / 60),
    sec = seconds % 60;
  if (min < 100) times.push(`${min * 100 + sec}`);
  if (min <= 100 && sec < 40) {
    times.push(`${(min - 1) * 100 + (sec + 60)}`);
  }
  return times;
};

var getCost = function (time, startAt, moveCost, pushCost) {
  let cost = 0,
    i = 0;
  while (i < time.length) {
    if (startAt != time[i]) {
      cost += moveCost;
      startAt = time[i];
    } else {
      cost += pushCost;
      i++;
    }
  }
  return cost;
};

const startAt = 1,
  moveCost = 2,
  pushCost = 1,
  targetSeconds = 600;
console.log(minCostSetTime(startAt, moveCost, pushCost, targetSeconds));
