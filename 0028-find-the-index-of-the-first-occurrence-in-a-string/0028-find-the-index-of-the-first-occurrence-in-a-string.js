/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(haystack, needle) {
    nLength = needle.length;

    for(let i = 0; i < haystack.length; i++) {
        if(i+nLength > haystack.length) break;
        if(haystack.slice(i,i+nLength) == needle) {
            return i
        }
    }

    return -1
};