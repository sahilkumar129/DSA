/**
 * @param {number[]} rating
 * @return {number}
 */
var numTeams = function (rating) {
  let ans = 0;
  for (let i = 1; i < rating.length - 1; i++) {
    ans +=
      count(rating, i, 0, i - 1, -1) *
      count(rating, i, i + 1, rating.length - 1, 1);
    ans +=
      count(rating, i, 0, i - 1, 1) *
      count(rating, i, i + 1, rating.length - 1, -1);
  }
  return ans;
};

var count = function (arr, ind, start, end, order) {
  let ans = 0;
  for (let i = start; i <= end; i++) {
    if (checkOrder(arr[ind], arr[i], order)) ans++;
  }
  return ans;
};

var checkOrder = function (a, b, order) {
  if ((a - b) * order < 0) return true;
  return false;
};

const rating = [2, 5, 3, 4, 1];
console.log(numTeams(rating));
