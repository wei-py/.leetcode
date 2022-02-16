/*
 * @lc app=leetcode.cn id=860 lang=typescript
 *
 * [860] 柠檬水找零
 */

// @lc code=start
function lemonadeChange(bills: number[]): boolean {
  let sum: number = bills[0];
  for (let i = 1; i < bills.length; i++) {
    if (bills[i] === 5) {
      sum += bills[i]
    } else if (sum - bills[i] <= 5) {
      sum += bills[i]
    } else {
      return false;
    }
  }
  return true;
};
// @lc code=end

