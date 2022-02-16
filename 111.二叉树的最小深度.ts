/*
 * @lc app=leetcode.cn id=111 lang=typescript
 *
 * [111] 二叉树的最小深度
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

function minDepth(root: TreeNode | null): number {
  if (!root) return 0;
  const queue = [root];
  let depth = 0;
  while(true) {
    let size = queue.length;
    depth++;
    while (size--) {
      const node = queue.shift();
      if (!node.left && !node.right) return depth;
      node.left && queue.push(node.left);
      node.right && queue.push(node.right);
    }
  }
};
// @lc code=end
