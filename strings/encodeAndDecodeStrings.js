var encode = function (strs) {
  return strs.join(",");
};

var decode = function (str) {
  return str.split(",");
};

const strs = ["lint", "code", "love", "you"];
console.log(encode(strs));
console.log(decode(encode(strs)));
