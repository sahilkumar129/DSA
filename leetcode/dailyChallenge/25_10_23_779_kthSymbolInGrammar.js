/**
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
var kthGrammar = function(n, k) {
    if(k==1 || n==1) return 0;
    if(k >= Math.pow(2,n-2)+1)
        return kthGrammar(n-1, Math.pow(2,n-1)-k+1)^((n%2)^1);
    else return kthGrammar(n-1, k);
};

const n=6, k=20;
console.log(kthGrammar(n,k))
