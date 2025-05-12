/**
 * @param {number[]} digits
 * @return {number[]}
 */
var findEvenNumbers = function (digits) {
  const output = [];
  const digitCountMap = new Map();
  for (const digit of digits) {
    digitCountMap.set(digit, (digitCountMap.get(digit) ?? 0) + 1);
  }
  for (let i = 1; i < 10; i++) {
    if (!digitCountMap.get(i)) continue;
    digitCountMap.set(i, digitCountMap.get(i) - 1);
    for (let j = 0; j < 10; j++) {
      if (!digitCountMap.get(j)) continue;
      digitCountMap.set(j, digitCountMap.get(j) - 1);
      for (let k = 0; k < 10; k += 2) {
        if (!digitCountMap.get(k)) continue;
        output.push(100 * i + 10 * j + k);
      }
      digitCountMap.set(j, digitCountMap.get(j) + 1);
    }
    digitCountMap.set(i, digitCountMap.get(i) + 1);
  }
  return output;
};

const digits = [2, 1, 3, 0];
console.log(findEvenNumbers(digits));
