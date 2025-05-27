var zAlgorithm = function (s, p) {
  if (!s.length) return [];
  const x = p + "#" + s;
  const zArr = getZArray(x);
  console.log(zArr);
  const matchingIndexes = [];
  for (let i = p.length + 1; i < zArr.length; i++) {
    if (zArr[i] == p.length) matchingIndexes.push(i - p.length - 1);
  }
  return matchingIndexes;
};

var getZArray = function (p) {
  const z = new Array(p.length).fill(0);
  let l = (r = 0),
    i = 1;
  while (i < p.length) {
    if (i > r) {
      l = r = i;
      while (r < p.length && p[r - l] == p[r]) {
        r++;
      }
      z[i++] = r - l;
      r--;
    } else {
      if (z[i - l] <= r - i) {
        z[i] = z[i - l];
        i++;
      } else {
        l = i;
        while (r < p.length && p[r - l] == p[r]) {
          r++;
        }
        z[i++] = r - l;
        r--;
      }
    }
  }
  return z;
};

// bcd#abcdzbcdaabcde

const s = "abcdadzbcdaabcde",
  p = "bcd";
console.log(zAlgorithm(s, p));
