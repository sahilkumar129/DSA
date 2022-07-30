/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
var coinChange = function (coins, amount) {
  const dp = new Array(amount + 1).fill(Infinity);
  dp[0] = 0;
  for (let a = 1; a <= amount; a++) {
    for (const coin of coins) {
      if (a - coin >= 0) dp[a] = Math.min(dp[a], 1 + dp[a - coin]);
    }
  }
  return dp[amount] === Infinity ? -1 : dp[amount];
};

const coins = [1, 2, 5],
  amount = 11;
console.log(coinChange(coins, amount));
