/**
 * @param {number[]} cards
 * @return {number}
 */
var minimumCardPickup = function (cards) {
  const MAX_LEN = cards.length + 1;
  let ans = MAX_LEN,
    minDiffMap = new Map();
  for (let i = 0; i < cards.length; i++) {
    const cardVal = minDiffMap.get(cards[i]);
    if (cardVal != undefined) ans = Math.min(ans, i - cardVal + 1);
    minDiffMap.set(cards[i], i);
  }
  return ans == MAX_LEN ? -1 : ans;
};

const cards = [3, 4, 2, 3, 4, 7];
console.log(minimumCardPickup(cards));
