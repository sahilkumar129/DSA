/**
 * @param {string} s
 * @param {number[]} indices
 * @param {string[]} sources
 * @param {string[]} targets
 * @return {string}
 */
var findReplaceString = function (s, indices, sources, targets) {
  let output = "";
  let stIndices = new Array(indices.length).fill(null).map((_, i) => [indices[i], i]);
  stIndices = stIndices.filter(([ind, i]) => {
    const src = sources[i];
    const sub = s.slice(ind, ind + src.length);
    return sub == src;
  });
  stIndices.sort((a, b) => a[0] - b[0]);
  let i = 0,
    j = 0;
  while (i < stIndices.length) {
    if (stIndices[i][0] == j) {
      output += targets[stIndices[i][1]];
      j += sources[stIndices[i][1]].length;
      i++;
    } else {
      output += s.slice(j, stIndices[i][0]);
      j = stIndices[i][0];
    }
  }
  output += s.slice(j);
  return output;
};

const s = "abcd",
  indices = [0, 2],
  sources = ["ab", "ec"],
  targets = ["eee", "ffff"];
console.log(findReplaceString(s, indices, sources, targets));
