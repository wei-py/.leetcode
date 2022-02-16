/*
 * @lc app=leetcode.cn id=452 lang=typescript
 *
 * [452] 用最少数量的箭引爆气球
 */

// @lc code=start
function findMinArrowShots(points: number[][]): number {
  let arrow: number = 1;
  points.sort((a, b) => a[0] - b[0]);
  for (let i = 1; i < points.length; i++) {
    if (points[i][0] > points[i - 1][1]) {
      arrow++;
    } else {
      points[i][1] = Math.min(points[i - 1][1], points[i][1])
    }
  }
  return arrow;
};
// @lc code=end


const points = [[10,16],[2,8],[1,6],[7,12]];
findMinArrowShots(points);

// [ [ 1, 6 ], [ 2, 8 ], [ 7, 12 ], [ 10, 16 ] ]