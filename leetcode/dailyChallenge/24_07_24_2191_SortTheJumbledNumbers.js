/**
 * @param {number[]} mapping
 * @param {number[]} nums
 * @return {number[]}
 */
var sortJumbled = function(mapping, nums) {
   const numsArr = nums.map((val, ind) => [getMappedValue(val, mapping), ind]);
   numsArr.sort((a,b) => a[0]-b[0]);
   const result = [];
   numsArr.forEach(n => result.push(nums[n[1]]));
   return result;
};

var getMappedValue = function(num, mapping) {
    let val = 0, factor = 1;
    if(num === 0) return mapping[0];
    while(num > 0) {
        val += mapping[num%10] * factor;
        num = Math.floor(num/10);
        factor *= 10;
    }
    return val;
}

const mapping = [0,1,2,3,4,5,6,7,8,9], nums = [789,456,123];
console.log(sortJumbled(mapping, nums));

