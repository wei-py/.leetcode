/*
 * @lc app=leetcode.cn id=110 lang=typescript
 *
 * [110] 平衡二叉树
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 */

function isBalanced(root: TreeNode | null): boolean {
  const getDepth = function (node: TreeNode | null): number {
    if (!node) return 0;
    let leftDepth: number = getDepth(node.left);
    if (leftDepth === -1) {
      return -1;
    }
    let rightDepth: number = getDepth(node.right);
    if (rightDepth === -1) {
      return -1;
    }
    if (Math.abs(leftDepth - rightDepth) > 1) {
      return -1;
    } else {
      return 1 + Math.max(leftDepth, rightDepth);
    }
  }
  return getDepth(root) === -1 ? false : true;
};
// @lc code=end
