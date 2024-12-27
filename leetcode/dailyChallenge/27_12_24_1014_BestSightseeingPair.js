/**
 * @param {number[]} values
 * @return {number}
 */
var maxScoreSightseeingPair = function(values) {
    let ans = 0;
    const suffixArr = getSuffixArr(values);
    for(let i=0; i<values.length-1; i++)
        ans = Math.max(ans, values[i] + i + suffixArr[i+1]);
    return ans;
};

var getSuffixArr = function(values) {
    let suff = Array.from(values);
    for(let i=suff.length-1; i>=0; i--) {
        suff[i] = Math.max(suff[i+1] ?? suff[i] - i, suff[i] - i);
    }
    return suff;
}

const values = [8,1,5,2,6];
console.log(maxScoreSightseeingPair(values));


