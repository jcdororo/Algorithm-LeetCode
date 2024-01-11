/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function(s, numRows) {
    // const arr = Array(numRows).fill([]);
    if(numRows == 1) return s
    const arr = []
    for(let i = 0; i < numRows; i++) {
        arr.push([])
    }
    let isDown = true;
    let index = 0;
    let result = ''

    for(let i = 0; i < s.length; i++) {
        arr[index].push(s[i]);
        if(isDown) {
            index++
        } else {
            index--
        }
        if(index == 0) {
            isDown = true;
        } else if(index == numRows-1){
            isDown = false;
        }
    }
    // console.log(arr)
    for(const words of arr) {
        result += words.join('')
    }
    return result
    
    
};