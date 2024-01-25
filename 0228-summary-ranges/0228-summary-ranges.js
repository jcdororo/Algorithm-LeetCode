/**
 * @param {number[]} nums
 * @return {string[]}
 */
var summaryRanges = function(nums) {    
    let start = nums[0];
    let end = start;
    let result = [];
    for(let i = 0; i < nums.length; i++) {
        end = nums[i];
        if(end + 1 == nums[i+1]) {
            
        } else {
            if(start == end) {
                result.push(end+'')
            } else {
                result.push(start+'->'+end)
            }
            start = nums[i+1]
        }
    }
    return result
    
};