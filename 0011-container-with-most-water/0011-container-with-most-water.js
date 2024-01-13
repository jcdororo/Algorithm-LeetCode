/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
    let start = 0;
    let end = height.length - 1
    
    let area = 0;
    while(start <= end) {
        const minH = Math.min(height[start],height[end]);
        area = Math.max(area, minH * (end - start));
        if(height[start] <= height[end]) {            
            start++
        } else {
            end--
        }
    }
    return area
};
