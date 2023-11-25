/**
 * @param {number[]} piles
 * @return {number}
 */
var maxCoins = function (piles) {
  let ans = 0;
  piles.sort((a, b) => a - b);
  for (let i = 0; i < piles.length / 3; i++) {
    ans += piles[piles.length - (i + 1) * 2];
  }
  return ans;
};

const piles = [2, 4, 1, 2, 7, 8];
console.log(maxCoins(piles));
