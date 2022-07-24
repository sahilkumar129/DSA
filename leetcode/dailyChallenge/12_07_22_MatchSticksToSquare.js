/**
 * @param {number[]} matchsticks
 * @return {boolean}
 */
var makesquare = function (matchsticks) {
  let sum = matchsticks.reduce((a, b) => a + b, 0);
  if (sum % 4 !== 0 || matchsticks.length < 4) return false;
  const sideLen = sum / 4;
  const sides = new Array(4).fill(0);
  matchsticks.sort((a, b) => b - a);
  const dfs = function (i) {
    if (i === matchsticks.length) return sides.every((side) => side === sideLen);
    for (let j = 0; j < 4; j++) {
      if (sides[i] + matchsticks[i] > sideLen) continue;
      sides[j] += matchsticks[i];
      if (dfs(i + 1)) return true;
      sides[j] -= matchsticks[i];
    }
    return false;
  };
  return dfs(0);
};

const matchsticks = [1, 1, 2, 2, 2];
console.log(makesquare(matchsticks));
