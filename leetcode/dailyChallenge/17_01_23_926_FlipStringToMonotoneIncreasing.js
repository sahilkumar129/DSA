/**
 * @param {string} s
 * @return {number}
 */
var minFlipsMonoIncr = function (s) {
  let zeroCount = 0;
  for (const c of s) if (c === "0") zeroCount++;
  let zeroTillNow = 0,
    oneTillNow = 0,
    flips = s.length;
  for (let i = 0; i <= s.length; i++) {
    flips = Math.min(flips, zeroCount - zeroTillNow + oneTillNow);
    if (i === s.length) break;
    if (s[i] === "1") oneTillNow++;
    else zeroTillNow++;
  }
  return flips;
};

const s = "0110001";
console.log(minFlipsMonoIncr(s));
