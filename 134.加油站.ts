/*
 * @lc app=leetcode.cn id=134 lang=typescript
 *
 * [134] 加油站
 */

// @lc code=start
function canCompleteCircuit(gas: number[], cost: number[]): number {
  let steps: number = 0;
  let curSum: number = 0;
  let totalSum: number = 0;
  for (let i = 0; i < gas.length; i++) {
    curSum += gas[i] - cost[i];
    totalSum += gas[i] - cost[i];
    if (curSum < 0) {
      curSum = 0;
      steps = i + 1;
    }
  }
  if (totalSum < 0) return -1;
  return steps;
};
// @lc code=end
