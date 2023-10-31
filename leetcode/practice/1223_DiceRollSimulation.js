/**
 * @param {number} n
 * @param {number[]} rollMax
 * @return {number}
 */
var dieSimulator = function (n, rollMax) {
  const dp = [[1, 1, 1, 1, 1, 1]],
    rollsLeft = rollMax.map((x) => x - 1);
  while (n > 1) {
    let prev = dp[dp.length - 1],
      prevSum = prev.reduce((a, b) => a + b),
      next = [];
    for (let i = 0; i < 6; i++) {
      if (rollsLeft[i] > 0) {
        next.push(prevSum);
        rollsLeft[i]--;
      } else {
        let n = prevSum - dp[dp.length - rollMax[i]][i];
        if (dp.length - rollMax[i] - 1 >= 0) n += dp[dp.length - rollMax[i] - 1][i];
        next.push(n);
      }
    }
    dp.push(next);
    if (dp.length > 18) dp.shift();
    n--;
  }
  console.log(dp);
  const last = dp[dp.length - 1];
  return last.reduce((a, b) => a + b);
};

// 1 1 5 28
// 2 1 5 28
// 3 1 5 28
// 4 1 6 32 x
// 5 1 6 32
// 6 1 6 33 x y

// 1 1 1 2 2 3

const n = 5,
  rollMax = [2, 1, 1, 3, 3, 2];
console.log(dieSimulator(n, rollMax));
