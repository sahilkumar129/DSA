/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function (s) {
  const chars = s.toLowerCase().split("");
  const str = [];
  for (let c of chars) {
    if (isAlphaNumericChar(c)) str.push(c);
  }
  for (let i = 0, j = str.length - 1; i < j; i++, j--) {
    if (str[i] !== str[j]) return false;
  }
  return true;
};

var isAlphaNumericChar = function (c) {
  const charCode = c.charCodeAt(0);
  if (
    !(charCode >= "a".charCodeAt(0) && charCode <= "z".charCodeAt(0)) &&
    !(charCode >= "A".charCodeAt(0) && charCode <= "Z".charCodeAt(0)) &&
    !(charCode >= "0".charCodeAt(0) && charCode <= "9".charCodeAt(0))
  )
    return false;
  return true;
};

const s = "A man, a plan, a canal: Panama";
console.log(isPalindrome(s));
