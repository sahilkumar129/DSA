/**
 * @param {number[]} cards
 * @return {number}
 */
var minimumCardPickup = function (cards) {
  let ans = Infinity,
    indexMap = new Map();
  for (let i = 0; i < cards.length; i++) {
    if (!indexMap.has(cards[i])) indexMap.set(cards[i], i);
    else {
      ans = Math.min(ans, i - indexMap.get(cards[i]) + 1);
      indexMap.set(cards[i], i);
    }
  }
  return ans === Infinity ? -1 : ans;
};

const cards = [3, 4, 2, 3, 4, 7];
console.log(minimumCardPickup(cards));
