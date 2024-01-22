/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
    const anagramMap = new Map();

    for (const str of strs) {
        const anaStr = str.split('').sort().join('')

        if(anagramMap.has(anaStr)) {
            anagramMap.get(anaStr).push(str)
        } else {
            anagramMap.set(anaStr,[str])
        }
        
    }
    return Array.from(anagramMap.values())


};