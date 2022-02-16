/*
 * @lc app=leetcode.cn id=406 lang=typescript
 *
 * [406] 根据身高重建队列
 */

// @lc code=start
function reconstructQueue(people: number[][]): number[][] {
  let queue: number[][] = [];
  people.sort((a, b) => {
    if (a[0] !== b[0]) {
      return b[0] - a[0];
    } else {
      return a[1] - b[1];
    }
  });
  for (let i = 0; i < people.length; i++) {
    queue.splice(people[i][1], 0, people[i])
  };
  return queue;
};
// @lc code=end

// h 和 k 控制, 有俩个维度先控制好一个维度 h, 而后面的 k 可以理解为都是这个元素之前有 k 个元素;