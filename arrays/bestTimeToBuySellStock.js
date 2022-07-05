/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  let maxSell = prices[prices.length - 1],
    maxProfit = 0;
  for (let i = prices.length - 2; i >= 0; i--) {
    maxProfit = Math.max(maxProfit, maxSell - prices[i]);
    maxSell = Math.max(maxSell, prices[i]);
  }
  return maxProfit;
};

const prices = [7, 6, 4, 3, 1]; //[7, 1, 5, 3, 6, 4];
console.log(maxProfit(prices));
