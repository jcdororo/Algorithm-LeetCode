/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var setZeroes = function(matrix) {
    const zeros = []

    for(let i = 0; i < matrix.length; i++) {
        for(let j = 0; j < matrix[i].length; j++) {
            if(matrix[i][j] == 0) {
                zeros.push([i,j])
            }
        }
    }

    for(const flag of zeros) {
        // 가로 0 만들기
        for(let i = 0; i < matrix[0].length; i++) {
            matrix[flag[0]][i] = 0
        }
        // 세로 0 만기
        for(let i = 0; i < matrix.length; i++) {
            matrix[i][flag[1]] = 0
        }
    }

    return matrix
    
};