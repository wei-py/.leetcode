/*
 * @lc app=leetcode.cn id=121 lang=typescript
 *
 * [121] 买卖股票的最佳时机
 */

// @lc code=start
function maxProfit(prices: number[]): number {
  const len: number = prices.length;
  let dp: number[][] = Array.from(Array(len), () => new Array(2));
  dp[0][0] = 1;
  dp[0][1] = 1;
  return 1;
};
// @lc code=end

const prices = [7,1,5,3,6,4];
maxProfit(prices)