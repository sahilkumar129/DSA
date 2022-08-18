/**
 * @param {number[]} arr
 * @return {number}
 */
// var minSetSize = function(arr) {
//     const map = new Map();
//     arr.forEach(a => map.set(a, map.get(a) + 1 || 1));
//     const countArr = Array.from(map);
//     countArr.sort((a,b) => b[1]-a[1]);
//     let size = arr.length;
//     for(let i=0;i<countArr.length;i++) {
//         size -= countArr[i][1];
//         if(size <= arr.length/2)
//             return i+1;
//     }
//     return countArr.length;
// };

var minSetSize = function (arr) {
  const map = new Map();
  arr.forEach((a) => map.set(a, map.get(a) + 1 || 1));
  const countArr = new Array(100001).fill(0);
  map.forEach((value) => countArr[value]++);
  let count = 0,
    target = arr.length / 2;
  for (let i = 100000; i >= 0; i--) {
    if (target - countArr[i] * i <= 0) {
      const multiple = Math.ceil(target / i);
      count += multiple;
      return count;
    }
    target -= countArr[i] * i;
    count += countArr[i];
  }
};

const arr = [3, 3, 3, 3, 5, 5, 5, 2, 2, 7];
console.log(minSetSize(arr));
