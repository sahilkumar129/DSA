/**
 * @param {number} lo
 * @param {number} hi
 * @param {number} k
 * @return {number}
 */
var getKth = function (lo, hi, k) {
  const powerArr = [],
    powerDp = new Map();
  for (let i = lo; i <= hi; i++) {
    powerArr.push([i, getPower(i, lo, powerDp)]);
  }
  powerArr.sort((a, b) => a[1] - b[1]);
  return powerArr[k - 1][0];
};

var getPower = function (i, lo, powerDp) {
  if (i == 1) return 0;
  if (powerDp.has(i)) return powerDp.get(i);
  if (i % 2) powerDp.set(i, 1 + getPower(3 * i + 1, lo, powerDp));
  else powerDp.set(i, 1 + getPower(i / 2, lo, powerDp));
  return powerDp.get(i);
};

const lo = 12,
  hi = 15,
  k = 2;
console.log(getKth(lo, hi, k));
