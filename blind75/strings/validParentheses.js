/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
  let stack = [];
  for (let c of s) {
    if (c == "(" || c == "{" || c == "[") stack.push(c);
    else {
      const top = stack.pop();
      if (!top) return false;
      if ((c == ")" && top != "(") || (c == "}" && top != "{") || (c == "]" && top != "["))
        return false;
    }
  }
  if (stack.length) return false;
  return true;
};

const s = "([]{})";
console.log(isValid(s));
