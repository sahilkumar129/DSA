/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfFour = function(n) {
   if(n<1) return false;
   let count=0;
   for(let i=0;i<32;i++) {
      if(n&(1<<i)) {
         count++;
         if(count > 1 || i%2!=0) return false;
      }
   } 
   return count == 1;
};

const n=64;
console.log(isPowerOfFour(n));
