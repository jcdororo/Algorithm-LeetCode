/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    // while(true) {
    //     if(s.includes('()')) {
    //         s = s.replace('()','')
    //     } else {
    //         if(s.includes('[]')) {
    //             s = s.replace('[]','')
    //         } else {
    //             if(s.includes('{}')) {
    //                 s = s.replace('{}','')
    //             } else {
    //                 break;
    //             }
    //         }
    //     }
    // }

    // return s == ''
    
    s = s.split('')
    if(s.length == 1) return false;
    const stack = []
    for(const word of s) {
        if(word == '(' || word == '{' || word == '[') {
            stack.push(word)
        } else {
            top = stack[stack.length - 1]
            if((top == '(' && word == ')' ) || top == '{' && word == '}'  || top == '[' && word == ']' ) {
                stack.pop()
            } else {
                return false;
            }
        }
    }

    return stack.length == 0

};