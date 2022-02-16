/*
 * @lc app=leetcode.cn id=474 lang=typescript
 *
 * [474] 一和零
 */

// @lc code=start
function findMaxForm(strs: string[], m: number, n: number): number {
  const dp: number[][] = Array.from(Array(m + 1), () => Array(n + 1).fill(0));
  let one: number = 0;
  let zero: number = 0;
  for (let str of strs) {
    one = 0;
    zero = 0;
    for (let c of str) {
      c === '0' ? zero++ : one++
    };
    for (let i = m; i >= zero; i--) {
      for (let j = n; j >= one; j--) {
        dp[i][j] = Math.max(dp[i][j], dp[i - zero][j - one] + 1);
      }
    }
  }
  return dp[m][n];
};
// @lc code=end
