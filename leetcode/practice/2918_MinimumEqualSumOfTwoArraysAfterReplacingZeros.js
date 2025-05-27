/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var minSum = function(nums1, nums2) {
    const [sum1, sum2] = [getMinSum(nums1), getMinSum(nums2)];
    let minSum = Math.max(sum1, sum2);
    if(sum1 == sum2) return minSum;
    const smallArr = sum1 < sum2 ? nums1 : nums2;
    let zeroCount = 0;
    for(const num of smallArr)
        zeroCount += num == 0 ? 1 : 0;
    if(zeroCount == 0)
        minSum = -1;
    return minSum;
 };

var getMinSum = function(arr) {
    let sum = 0;
    for(const num of arr) {
        sum += num == 0 ? 1 : num;
    }   
    return sum;
}

const nums1 = [0,16,28,12,10,15,25,24,6,0,0], nums2 = [20,15,19,5,6,29,25,8,12];
console.log(minSum(nums1, nums2));
