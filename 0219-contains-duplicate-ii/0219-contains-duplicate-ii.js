/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var containsNearbyDuplicate = function(nums, k) {
    let map = new Map();

    /*
    for(let i = 0; i < nums.length; i++) {
        if(map.has(nums[i])) {
            map.get(nums[i]).push(i)
        } else {
            map.set(nums[i],[i])
        }
    }
    */
    /*    
    { 1 => [ 0, 3 ], 
      2 => [ 1 ], 
      3 => [ 2 ] }

    { 1 => [ 0, 2, 3 ], 
      0 => [ 1 ] }

    { 1 => [ 0, 3 ], 
      2 => [ 1, 4 ], 
      3 => [ 2, 5 ] }
    */
    /*
    for(const [key, val] of map) {
        if(val.length >= 2) {
            for(let i = 0; i < val.length; i++) {
                for(let j = i+1; j < val.length; j++) {
                    if(Math.abs(val[i] - val[j]) <= k) {
                        return true
                    }
                }
            }
        }
    }
    */
    for (let idx = 0; idx < nums.length; idx++) {
        // Check if the difference betweend duplicates is less than k
        if (idx - map.get(nums[idx]) <= k) {
            return true;
        }
        map.set(nums[idx], idx);
    }

    return false

    
};