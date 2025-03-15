/**
 * @param {number[][]} properties
 * @return {number}
 */
var numberOfWeakCharacters = function (properties) {
  let ans = 0,
    maxDefense = 0;
  properties.sort((a, b) => {
    if (a[0] == b[0]) return a[1] - b[1];
    return b[0] - a[0];
  });
  for (const [a, d] of properties) {
    if (d < maxDefense) ans++;
    maxDefense = Math.max(maxDefense, d);
  }
  return ans;
};

console.log(numberOfWeakCharacters(properties));
