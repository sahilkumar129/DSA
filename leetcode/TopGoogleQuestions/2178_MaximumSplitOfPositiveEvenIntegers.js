/**
 * @param {number} finalSum
 * @return {number[]}
 */
var maximumEvenSplit = function (finalSum) {
  if (finalSum % 2) return [];
  let ans = Math.floor(Math.sqrt(finalSum));
  while (true) {
    if (ans * (ans + 1) <= finalSum && finalSum < (ans + 1) * (ans + 2)) break;
    if (ans * (ans + 1) < finalSum) ans++;
    else ans--;
  }
  const output = [];
  let diff = finalSum - ans * (ans + 1);
  for (let i = 1; i <= ans; i++) output.push(2 * i);
  output[output.length - 1] += diff;
  return output;
};

console.log(maximumEvenSplit(10));
console.log(maximumEvenSplit(12));
console.log(maximumEvenSplit(14));
console.log(maximumEvenSplit(20));
console.log(maximumEvenSplit(22));
