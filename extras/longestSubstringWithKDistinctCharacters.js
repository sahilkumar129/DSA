var longestSubstr = function (str, k) {
  let start = 0,
    maxLen = 0;
  const map = new Map();
  for (let i = 0; i < str.length; i++) {
    map.set(str[i], i);
    while (map.size > k) {
      if (map.get(str[start]) == start) map.delete(str[start]);
      start++;
    }
    maxLen = Math.max(maxLen, i - start + 1);
  }
  return maxLen;
};

console.log(longestSubstr("aabcdac", 3));
