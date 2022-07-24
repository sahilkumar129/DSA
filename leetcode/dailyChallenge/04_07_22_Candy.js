/**
 * @param {number[]} ratings
 * @return {number}
 */
var candy = function (ratings) {
  let i = 1,
    candy = ratings.length,
    peak,
    valley;
  while (i < ratings.length) {
    while (ratings[i] === ratings[i - 1]) {
      i++;
      continue;
    }

    // Increasing slope
    peak = 0;
    while (ratings[i] > ratings[i - 1]) {
      peak++;
      candy += peak;
      i++;
      if (i === ratings.length) return candy;
    }

    // Decreasing slope
    valley = 0;
    while (ratings[i] < ratings[i - 1]) {
      valley++;
      candy += valley;
      i++;
    }

    candy -= Math.min(peak, valley);
  }
  return candy;
};

const ratings = [1, 2, 2];
console.log(candy(ratings));
