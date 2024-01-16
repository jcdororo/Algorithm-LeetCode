/**
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLen = function(target, nums) {
    let left = 0;
    let sum = 0;
    let minLength = Infinity;

    for (let right = 0; right < nums.length; right++) {
        sum += nums[right]

        while(true) {
            if(sum >= target) {
                minLength = Math.min(minLength, right - left + 1)
                sum -= nums[left]
                left++
            } else {
               break;           
            }
        }


        
    }

    // minLength가 여전히 Infinity이면 target 이상인 부분 배열이 없는 것이므로 0 반환
    return minLength !== Infinity ? minLength : 0;
};