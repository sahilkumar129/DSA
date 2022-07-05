var numberOfGoodSubsets = function (nums) {
  let ans = 0;
  const dfs = function (i, subset, currProd) {
    if (i == nums.length) {
      if (!subset.length || !verifyPrimeProduct(0, 1, currProd)) return;
      ans++;
      console.log(subset);
      return;
    }
    dfs(i + 1, subset, currProd);
    dfs(i + 1, [...subset, nums[i]], currProd * nums[i]);
  };
  dfs(0, [], 1);
  return ans;
};

const primes = [2, 3, 5, 7, 11, 13, 17, 19, 23, 27, 29];
var verifyPrimeProduct = function (i, currProd, target) {
  if (currProd == target) return true;
  if (i >= primes.length || currProd > target) return false;
  for (let j = i; j < primes.length; j++)
    if (
      verifyPrimeProduct(i + 1, currProd, target) ||
      verifyPrimeProduct(i + 1, currProd * primes[i], target)
    )
      return true;
  return false;
};

const nums = [4, 2, 3, 15];
console.log(numberOfGoodSubsets(nums));
// console.log(verifyPrimeProduct(0, 8));
