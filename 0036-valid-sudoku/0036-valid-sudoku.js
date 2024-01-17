/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function(board) {
    let result = true;

    // 열 계산
    for(let i = 0; i < board.length; i++) {
        const temp = board[i].filter((x,i) => x != '.')
        if(!isOk(temp)) {
            result = false;
            break;
        }
    }
    if(!result) return result
    // 행 계산
    for(let i = 0; i < board.length; i++) {
        let temp = [];
        for(let j = 0; j < board.length; j++) {            
            temp.push(board[j][i])
        }
        temp = temp.filter((x,i) => x != '.')
        if(!isOk(temp)) {
            result = false;
            break;
        }    
    }

    if(!result) return result
    // 3x3 계산
    /*
    00 01 02
    10 11 12
    20 21 22

    03 04 05
    13 14 15
    23 24 25

    06 07 08
    16 17 18
    26 27 28

    30 31 32
    40 41 42
    50 51 52
    */
    for(let i = 0; i < board.length; i++) {
        let temp = [];
       
        for(let j = 0; j < board.length; j++) {
            const x = parseInt((j / 3)) + (parseInt(i / 3) * 3)
            const y = parseInt(j % 3) + (i%3*3)
            temp.push(board[x][y])            
            // console.log(x,y)
        }
        temp = temp.filter((x,i) => x != '.')
        // console.log(temp)
        if(!isOk(temp)) {
            result = false;
            break;
        }         
    }

    return result


    function isOk(temp) {
        return temp.length == new Set(temp).size
    }
    
};