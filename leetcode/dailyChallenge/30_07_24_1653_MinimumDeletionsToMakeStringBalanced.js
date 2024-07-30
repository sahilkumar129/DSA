/**
 * @param {string} s
 * @return {number}
 */
var minimumDeletions = function (s) {
  let aCount = getACount(s),
    bCount = 0;
  let ans = aCount;
  for (let i = 0; i < s.length; i++) {
    s[i] == "b" ? bCount++ : aCount--;
    ans = Math.min(ans, aCount + bCount);
  }
  return ans;
};

var getACount = function (s) {
  let aCount = 0;
  for (const c of s) aCount += c == "a" ? 1 : 0;
  return aCount;
};

const s = "bbaaaaabb";
console.log(minimumDeletions(s));
