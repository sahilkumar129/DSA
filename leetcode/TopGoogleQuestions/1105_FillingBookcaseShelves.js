/**
 * @param {number[][]} books
 * @param {number} shelfWidth
 * @return {number}
 */
var minHeightShelves = function (books, shelfWidth) {
  const minHeight = new Array(books.length + 1).fill(Infinity);
  minHeight[0] = 0;
  for (let i = 1; i <= books.length; i++) {
    let currSW = 0,
      maxSH = 0;
    for (let j = i - 1; j >= 0; j--) {
      if (currSW + books[j][0] > shelfWidth) break;
      currSW += books[j][0];
      maxSH = Math.max(maxSH, books[j][1]);
      minHeight[i] = Math.min(minHeight[i], maxSH + minHeight[j]);
    }
  }
  return minHeight[books.length];
};

const books = [
    [1, 1],
    [2, 3],
    [2, 3],
    [1, 1],
    [1, 1],
    [1, 1],
    [1, 2],
  ],
  shelfWidth = 4;
console.log(minHeightShelves(books, shelfWidth));
