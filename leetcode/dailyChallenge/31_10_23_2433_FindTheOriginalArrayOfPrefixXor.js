/**
 * @param {number[]} pref
 * @return {number[]}
 */
var findArray = function (pref) {
  const arr = [pref[0]];
  for (let i = 1; i < pref.length; i++) {
    arr.push(pref[i - 1] ^ pref[i]);
  }
  return arr;
};

const pref = [5, 2, 0, 3, 1];
console.log(findArray(perf));
