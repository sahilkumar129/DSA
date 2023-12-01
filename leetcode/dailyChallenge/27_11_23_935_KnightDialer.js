/**
 * @param {number} n
 * @return {number}
 */
// var knightDialer = function(n) {
//     let ans = 0;
//     const dp = new Map();
//     for(let i=0; i<10; i++)
//         ans = (ans + getKnights(i, n, dp)) % 1000000007;
//     return ans;
// };

// var getKnights = function(curr, n, dp) {
//     if(n==1) return 1;
//     if(dp.has(curr) && dp.get(curr).has(n))
//         return dp.get(curr).get(n);
//     let ans = 0;
//     for(const next of getNext(curr)) {
//         ans = (ans + getKnights(next, n-1, dp)) % 1000000007;
//     }
//     const val = dp.get(curr) ?? new Map();
//     val.set(n, ans);
//     dp.set(curr, val);
//     return ans;
// }

var getNext = function (curr) {
  switch (curr) {
    case 0:
      return [4, 6];
    case 1:
      return [6, 8];
    case 2:
      return [7, 9];
    case 3:
      return [4, 8];
    case 4:
      return [0, 3, 9];
    case 5:
      return [];
    case 6:
      return [0, 1, 7];
    case 7:
      return [2, 6];
    case 8:
      return [1, 3];
    case 9:
      return [2, 4];
  }
};

var knightDialer = function (n) {
  let dp = new Array(10).fill(1);
  for (let i = 1; i < n; i++) {
    const dp2 = new Array(10).fill(0);
    for (let j = 0; j < 10; j++) {
      if (j == 5) continue;
      for (const next of getNext(j)) dp2[j] = (dp2[j] + dp[next]) % 1000000007;
    }
    dp = [...dp2];
  }
  return dp.reduce((a, b) => (a + b) % 1000000007);
};

const n = 3131;
console.log(knightDialer(n));
