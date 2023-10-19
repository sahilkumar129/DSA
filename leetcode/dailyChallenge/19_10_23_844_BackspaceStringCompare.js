/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var backspaceCompare = function(s, t) {
    return backspaceCompareHelper(s) == backspaceCompareHelper(t);
};

var backspaceCompareHelper = function(s) {
    let count=0, str='';
    for(let i=s.length-1;i>=0;i--) {
        if(s[i] == '#') count++;
        else {
            if(count == 0)
                str += s[i];
            else count--;
        }
    }
    return reverse(str);
}

var reverse = function(s) {
    let str = s.split(''), i=0;
    for(let i=0,j=str.length-1;i<j;i++,j--) {
        let temp = str[i];
        str[i] = str[j];
        str[j] = temp;
    }
    return str.join('');
}

const s = "ab#c", t = "ad#c";
console.log(backspaceCompare(s, t));
