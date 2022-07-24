/**
 * @param {number[]} cost
 * @return {number}
 */
var minCostClimbingStairs = function (cost) {
  // let dp = new Array(cost.length+1).fill(-1);
  // const dfs = function(i) {
  //     if(i>=cost.length) return 0;
  //     if(dp[i] !== -1) return dp[i];
  //     dp[i] = Math.min(dfs(i+1), dfs(i+2)) + cost[i];
  //     return dp[i];
  // }
  // return Math.min(dfs(0), dfs(1));
  let a = cost[0],
    b = cost[1];
  for (let i = 2; i < cost.length; i++) {
    let temp = Math.min(a, b) + cost[i];
    a = b;
    b = temp;
  }
  return Math.min(a, b);
};

const cost = [1, 100, 1, 1, 1, 100, 1, 1, 100, 1];
console.log(minCostClimbingStairs(cost));
