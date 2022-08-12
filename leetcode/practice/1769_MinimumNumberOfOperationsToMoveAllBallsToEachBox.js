/**
 * @param {string} boxes
 * @return {number[]}
 */
var minOperations = function (boxes) {
  let ans = [];
  for (let i = 0; i < boxes.length; i++) {
    let count = 0;
    for (let j = 0; j < boxes.length; j++) {
      if (boxes[j] === "1") count += Math.abs(j - i);
    }
    ans.push(count);
  }
  return ans;
};

const boxes = "110";
console.log(minOperations(boxes));
