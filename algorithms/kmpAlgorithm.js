var kmpAlgorithm = function (s, p) {
  if (!s.length) return [];
  const x = p + "#" + s;
  const lps = getLPS(x);
  const matchingIndexes = [];
  for (let i = p.length + 1; i < lps.length; i++) {
    if (lps[i] == p.length) matchingIndexes.push(i - (p.length - 1) - (p.length + 1));
  }
  return matchingIndexes;
};

var getLPS = function (p) {
  const lps = new Array(p.length).fill(0);
  let i = 1,
    len = 0;
  while (i < p.length) {
    if (p[len] == p[i]) {
      len++;
      lps[i++] = len;
    } else {
      if (len > 0) {
        len = lps[len - 1];
      } else {
        i++;
      }
    }
  }
  return lps;
};

const s = "abcdzbcdaabcde",
  p = "bcd";
console.log(kmpAlgorithm(s, p));
