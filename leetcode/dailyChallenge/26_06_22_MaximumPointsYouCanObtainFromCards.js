/**
 * @param {string} n
 * @return {number}
 */
var minPartitions = function (n) {
  let max = parseInt(n[0]);
  for (let i = 1; i < n.length; i++) max = Math.max(max, parseInt(n[i]));
  return max;
};

const n = "27346209830709182346";
console.log(minPartitions(n));
