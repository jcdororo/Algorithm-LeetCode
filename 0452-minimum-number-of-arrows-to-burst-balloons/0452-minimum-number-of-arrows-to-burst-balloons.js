/**
 * @param {number[][]} points
 * @return {number}
 */
var findMinArrowShots = function(points) {
    // points.sort((a, b) => a[0] - b[0])
    // let prev = null
    // let count = 0;
    // console.log(points)
    // for(let [start, end] of points) {
    //     console.log(prev,count)
    //     if(prev == null || prev < start) {
    //         count++;
    //         prev = end;
    //     } else {
    //         prev = Math.min(prev, end);
    //     }
    // }
    // return count;

    if (points.length === 0) {
        return 0;
    }

    // 구간을 끝나는 지점을 기준으로 오름차순 정렬
    points.sort((a, b) => a[1] - b[1]);
    console.log(points)
    let arrows = 1; // 처음에 한 번은 화살을 쏴야함
    let end = points[0][1];

    // 겹치는 구간을 찾아 화살 수를 최소화
    for (let i = 1; i < points.length; i++) {
        if (points[i][0] > end) {
            console.log(points[i][0], end)
            // 현재 구간과 겹치지 않으면 화살을 쏨
            arrows++;
            end = points[i][1];
        }
    }

    return arrows;
};