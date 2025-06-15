/**
 * @param {number} num
 * @return {number}
 */
var maxDiff = function(num) {
    const [a, b] = [getNum(num, true), getNum(num, false)];
    return +a - +b;
};

var getNum = function(num, max) {
    num = `${num}`;
    let i=0, replaceNum;
    for(; i<num.length; i++) {
        if(max) {
            if(num[i] < '9') {
                replaceNum = '9';
                break;
            }
        } else {
            if(num[i] > '1' && i == 0) {
                replaceNum = '1';
                break;
            } else if(num[i] > '1' && i > 0) {
                replaceNum = '0';
                break;
            }
        }
    }
    if(replaceNum)
        num = replace(num, num[i], replaceNum);
    return num;
}

var replace = function(num, a, b) {
    let returnNum = '';
    for(let i=0; i<num.length; i++) {
        if(num[i] == a)
            returnNum += b;
        else returnNum += num[i];
    }
    return returnNum;
}

const num = 1892;
console.log(maxDiff(num));
