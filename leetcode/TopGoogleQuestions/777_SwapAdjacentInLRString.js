/** Solution 1
 * T = O(n2)
 * @param {string} start
 * @param {string} result
 * @return {boolean}
 */
var canTransform1 = function (start, result) {
  let ind;
  for (let i = 0; i < start.length; i++) {
    if (start[i] == result[i]) continue;
    if (start[i] == "L") return false;
    if (start[i] == "X") {
      if (result[i] != "L") return false;
      ind = findChar(start, i + 1, "L", "X");
    } else if (start[i] == "R") {
      if (result[i] != "X") return false;
      ind = findChar(start, i + 1, "X", "R");
    }
    if (ind == -1) return false;
    start = swap(start, i + 1, ind);
    start = swap(start, i, i + 1);
  }
  return true;
};

var findChar = function (arr, startInd, char, allowedChar) {
  for (let i = startInd; i < arr.length; i++) {
    if (arr[i] == char) return i;
    else if (arr[i] != allowedChar) return -1;
  }
  return -1;
};

var swap = function swapChars(str, i, j) {
  if (i === j) return str;

  return str.substring(0, i) + str[j] + str.substring(i + 1, j) + str[i] + str.substring(j + 1);
};

/** Solution 2
 * T = O(n)
 * @param {string} start
 * @param {string} result
 * @return {boolean}
 */
var canTransform = function (start, result) {
  const LStart = getIndices(start, "L"),
    LResult = getIndices(result, "L"),
    RStart = getIndices(start, "R"),
    RResult = getIndices(result, "R");
  //check relative ordering as L and R can't cross through
  if (start.replaceAll("X", "") != result.replaceAll("X", "")) return false;
  return (
    compareIndices(LStart, LResult, (n, m) => n >= m) &&
    compareIndices(RStart, RResult, (n, m) => n <= m)
  );
};

var getIndices = function (arr, char) {
  const indices = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === char) indices.push(i);
  }
  return indices;
};

var compareIndices = function (start, result, cmp) {
  if (start.length != result.length) return false;
  for (let i = 0; i < start.length; i++) {
    if (!cmp(start[i], result[i])) return false;
  }
  return true;
};

const start = "RXXLRXRXL",
  result = "XRLXXRRLX";
console.log(canTransform(start, result));
