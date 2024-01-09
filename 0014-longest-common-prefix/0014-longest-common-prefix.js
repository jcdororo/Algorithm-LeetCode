/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    if(strs.length == 1) return strs[0]
    
    let result = '';


    // for(let i = 0; i < strs.length; i++) {
        // 접두사 만들기
        for(let j = 1; j <= strs[0].length; j++) {
            const temp = strs[0].slice(0,j)
            let pass = false;
            for(let k = 0; k < strs.length; k++) {
                // console.log(strs[k].slice(0,j),temp)
                if(strs[k].slice(0,j) == temp) {
                    pass = true;
                } else {
                    pass = false;
                    break;
                }
            }
            if(pass) {
                if(result.length < temp.length) {
                    result = temp
                }
            }
        }
    // }
    // console.log(arr)

    return result
};