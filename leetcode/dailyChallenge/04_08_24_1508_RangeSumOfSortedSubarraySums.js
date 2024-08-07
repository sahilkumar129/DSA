/**
 * @param {number[]} nums
 * @param {number} n
 * @param {number} left
 * @param {number} right
 * @return {number}
 */
var rangeSum = function(nums, n, left, right) {
    const sumArr = getSumArr(nums, n);
    let sum = 0;
    for(let i=left-1; i<right; i++)
        sum = (sum + sumArr[i])%1000000007;
    return sum;
}

var getSumArr = function(nums, n) {
    let sumArr = [];
    for(let i=0; i<nums.length; i++) {
        let sum = 0;
        for(let j=i; j<nums.length; j++) {
            sum += nums[j];
            sumArr.push(sum);
        }
    }
    sumArr.sort((a,b) => a-b);
    return sumArr;
}

const nums = [1,2,3,4], n = 4, left = 1, right = 5;
console.log(rangeSum(nums, n, left, right));
