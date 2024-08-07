
/**
 * @param {number[]} target
 * @param {number[]} arr
 * @return {boolean}
 */
var canBeEqual = function(target, arr) {
    let map = new Map();
    target.forEach(a => {
        map.set(a, (map.get(a) ?? 0) + 1);
    });
    for(const a of arr) {
        if(!map.has(a)) return false;
        let v = map.get(a);
        if(v <= 0) return false;
        map.set(a, v - 1);
    };
    return true; 
};

const target = [1,2,3,4], arr = [2,4,1,3];
console.log(canBeEqual(target, arr));
