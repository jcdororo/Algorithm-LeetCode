/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    let word = '';
    const upper = s.toUpperCase();

    for(let i = 0; i < upper.length; i++) {
        if(!isNaN(upper[i]) && upper[i] != ' ') {
            word += upper[i]
        }
        if((upper[i] >= 'A' && upper[i] <= 'Z') && isNaN(upper[i])) {
            word += upper[i]
        }
    }
    if(word == word.split('').reverse().join('')) {
        return true;
    } else {
        return false;
    }


};