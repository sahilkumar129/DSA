/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var maximumScore = function(nums, k) {
    let i=k,j=k,minVal=nums[k],maxScore=nums[k];
    while(i>0 || j<nums.length-1) {
        if(i == 0 || (j < nums.length-1 && nums[j+1] > nums[i-1]))
            j++;
        else i--;
        // console.log(i,j,leftMin,rightMin,minVal,maxScore);
        minVal = Math.min(minVal, Math.min(nums[i], nums[j]));
        maxScore = Math.max(maxScore, minVal*(j-i+1))
    }    
    return maxScore;
};

const nums = [1,4,3,7,4,5], k = 3;
console.log(maximumScore(nums, k));
