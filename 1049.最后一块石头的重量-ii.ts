/*
 * @lc app=leetcode.cn id=1049 lang=typescript
 *
 * [1049] 最后一块石头的重量 II
 */

// @lc code=start
function lastStoneWeightII(stones: number[]): number {
  const sum: number = stones.reduce((p, v) => p + v);
  const dpLen: number = Math.floor(sum / 2);
  const dp: number[] = Array(dpLen + 1).fill(0);
  for (let i = 0; i < stones.length; i++) {
    for (let j = dpLen; j >= stones[i]; j--) {
      dp[j] = Math.max(dp[j], dp[j - stones[i]] + stones[i]);
    };
  }
  return sum - dp[dpLen] - dp[dpLen];
};
// @lc code=end

