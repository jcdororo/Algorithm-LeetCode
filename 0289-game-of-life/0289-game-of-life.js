/**
 * @param {number[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var gameOfLife = function(board) {
    const arr = [];

    function check(i,j) {
        let count = 0;
        const lists = [[-1,-1],[-1,0],[-1,+1],
                      [0,-1],       [0,+1],
                      [+1,-1],[+1,0],[+1,+1]]
        for(const [a, b] of lists) {
            if(i + a >= 0 && j + b >= 0 && i + a < board.length && j + b < board[0].length) {                
                if(board[i+a][j+b] == 1) {
                    count++
                } 
            }
        }
        if(board[i][j] == 1) {
            if(count < 2) {
                return 0
            }
            if(count == 2 || count == 3) {
                return 1
            }
            if(count >= 3) {
                return 0
            }
        } else {
            if(count == 3) {
                return 1
            } else {
                return 0
            }
        }

    }
    
    for(let i = 0; i < board.length; i++) {
        for(let j = 0; j < board[0].length; j++) {
            const result = check(i, j);
            arr.push(result)    
        }
    }
    for(let i = 0; i < board.length; i++) {
        for(let j = 0; j < board[0].length; j++) {
            board[i][j] = (arr[(i*board[0].length) + j])
        }
    }
};