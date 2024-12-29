/**
 * @param {string[]} words
 * @param {string} target
 * @return {number}
 */
var numWays = function(words, target) {
    const dp = initializeDP(words[0].length, target.length);
    return helper(0,0,words,target,dp);
};

var helper = function(i,j,words,target,dp) {
    if(j>=target.length) return 1;
    if(i>=words[0].length || (words[0].length - i < target.length - j)) return 0;
    if(dp[i][j] != -1) return dp[i][j];
    let returnVal = helper(i+1,j,words,target,dp);
    const targetCount = countTargets(target[j],i,words);
    if(targetCount > 0)
        returnVal = (returnVal + helper(i+1,j+1,words,target,dp) * targetCount)%1000000007;
    dp[i][j] = returnVal%1000000007;
    return dp[i][j];
}

var initializeDP = function(x,y) {
    let arr = [];
    for(let i=0; i<x; i++) {
        let temp = [];
        for(let j=0; j<y; j++) {
            temp.push(-1);
        }
        arr.push(temp);
    }
    return arr;
}

var countTargets = function(target, i, words) {
    let count = 0;
    for(const word of words)
        if(word[i] == target)
            count++;
    return count;
}

const words = ["acca","bbbb","caca"], target = "aba";
console.log(numWays(words, target));
