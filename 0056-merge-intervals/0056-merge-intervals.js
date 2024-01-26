/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function(intervals) {    
    intervals.sort((a,b) => a[0] - b[0])

    const result = [];
    for(let j = 0; j < intervals.length; j++) {
        let start = intervals[j][0];
        let end = intervals[j][1];
        for(let i = j+1; i < intervals.length; i++) {
            if(end >= intervals[i][0]) {
                start = Math.min(start,intervals[i][0])
                end = Math.max(end,intervals[i][1])
                j++
            }
        }        
        result.push([start,end])
    }
    return result
    
};