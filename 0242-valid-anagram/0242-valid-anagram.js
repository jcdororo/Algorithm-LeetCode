/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {

    const strS = s.split('').sort().join('')
    const strT = t.split('').sort().join('')

    return strS == strT

    
};