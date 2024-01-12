/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(numbers, target) {

    let start = 0;
    let end = numbers.length - 1

    while(start <= end) {
        const sum = numbers[start] + numbers[end]
        if(sum == target) {
            const temp = [];
            temp[0] = start + 1
            temp[1] = end + 1
            return temp
        } else if(sum > target) {
            end--
        } else if(sum < target) {
            start++
        }
    }
    

    
};