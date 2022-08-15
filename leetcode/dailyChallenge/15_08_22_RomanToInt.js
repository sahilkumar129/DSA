/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function (s) {
  let ans = 0;
  const mp = new Map([
    ["I", 1],
    ["V", 5],
    ["X", 10],
    ["L", 50],
    ["C", 100],
    ["D", 500],
    ["M", 1000],
  ]);
  for (let i = 0; i < s.length; i++) {
    if (i !== s.length - 1 && mp.get(s[i]) < mp.get(s[i + 1])) ans -= mp.get(s[i]);
    else ans += mp.get(s[i]);
  }
  return ans;
};

const s = "MCMXCIV";
console.log(romanToInt(s));
