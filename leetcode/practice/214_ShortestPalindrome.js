/**
 * @param {string} s
 * @return {string}
 */
var shortestPalindrome = function (s) {
  const r = reverse(s);
  const lmp = createLMP(s);
  let j = 0;
  for (let i = 0; i < r.length; i++) {
    if (s[j] !== r[i]) {
      j = lmp[j - 1] ?? 0;
    }
    j++;
  }
  const output = r.substr(0, s.length - j) + s;
  return output;
};

var reverse = function (s) {
  let r = "";
  for (let i = s.length - 1; i >= 0; i--) r += s[i];
  return r;
};

var createLMP = function (s) {
  const lmp = new Array(s.length).fill(0);
  let j = 0;
  for (let i = 1; i < s.length; i++) {
    if (s[i] == s[j]) j++;
    else if (s[i] == s[0]) j = 1;
    else j = 0;
    lmp[i] = j;
  }
  return lmp;
};

//    abcd
// dcba

//    aabcd
// dcbaa

// aaba
// abaa

// aacecaaa#aaacecaa
// aaacecaa

const s = "aacecaaa";
console.log(shortestPalindrome(s));
