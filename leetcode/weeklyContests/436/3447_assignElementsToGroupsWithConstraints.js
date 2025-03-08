/**
 * @param {number[]} groups
 * @param {number[]} elements
 * @return {number[]}
 */
var assignElements = function(groups, elements) {
    let maxElem = 0;
    const output = [], visitedMultiple = new Set();
    const defaultInd = getOneIndex(elements);
    groups.forEach(group => {
        maxElem = Math.max(maxElem, group);
        output.push(defaultInd);
    });
    const groupsIndexMap = getGroupsIndexMap(groups);
    for(let i=0; i<elements.length; i++) {
         let multiplier = 1, multiple = elements[i];
        // No need to process after we get 1 as that divides all numbers
         if(multiple == 1) break;
         if(visitedMultiple.has(multiple)) continue;
         while(multiple <= maxElem) {
            multiple = elements[i] * multiplier;
            if(groupsIndexMap.has(multiple)) {
                groupsIndexMap.get(multiple).forEach(ind => {
                    output[ind] = i;
                })
                visitedMultiple.add(multiple);
                groupsIndexMap.delete(multiple);
            }
            multiplier++;
         }
     }
    return output;
};  

var getOneIndex = function(elements) {
    for(let i=0; i<elements.length; i++) {
        if(elements[i] == 1) {
            return i;
        }
    }
    return -1;
}

var getGroupsIndexMap = function(groups) {
    const indexMap = new Map();
    for(let i=0; i<groups.length; i++) {
        const val = indexMap.get(groups[i]) ?? [];
        val.push(i);
        indexMap.set(groups[i], val);
    }
    return indexMap;
}

const groups = [8,4,3,2,4], elements = [4,2];
console.log(assignElements(groups, elements));
