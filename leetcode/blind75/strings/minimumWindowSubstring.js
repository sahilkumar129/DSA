/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 *
 * Concept:
 * We use hashmap to track the character's frequency
 * We just check how many of the keys have satisified the condition
 * instead of always checking all the keys
 *
 * Once have == need, we need to keep removing characters from front
 * 		till have < need
 */
var minWindow = function (s, t) {
  let i = 0,
    j,
    ans = "",
    currMaxLen = Number.MAX_SAFE_INTEGER,
    have = 0;
  const tFreq = new Map(),
    sFreq = new Map();
  for (const c of t) tFreq.set(c, (tFreq.get(c) ?? 0) + 1);
  for (const c of t) sFreq.set(c, 0);
  j = i;
  while (j < s.length) {
    if (tFreq.has(s[j])) {
      sFreq.set(s[j], sFreq.get(s[j]) + 1);
      if (sFreq.get(s[j]) === tFreq.get(s[j])) have++;
      while (have === tFreq.size) {
        if (j - i + 1 < currMaxLen) {
          ans = s.substr(i, j - i + 1);
          currMaxLen = j - i + 1;
        }
        sFreq.set(s[i], sFreq.get(s[i]) - 1);
        if (sFreq.get(s[i]) < tFreq.get(s[i])) have--;
        i++;
        while (i < j && !tFreq.has(s[i])) i++;
      }
    }
    j++;
  }

  return ans;
};

const s = "ADOBECAODEBANC",
  t = "ABAC";
console.log(minWindow(s, t));
