/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {    
    let str = s.split(' ').filter((x,i) => x != '').reverse().join(' ')
    return str
    };