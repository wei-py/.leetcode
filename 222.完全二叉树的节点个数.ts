/*
 * @lc app=leetcode.cn id=222 lang=typescript
 *
 * [222] 完全二叉树的节点个数
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

function countNodes(root: TreeNode | null): number {
  if (!root) return 0;
  let queue: TreeNode[] = [root];
  let depth:number = 0;
  while (queue.length) {
    let size: number = queue.length;
    while (size--) {
      const node = queue.shift();
      depth++;
      node.left && queue.push(node.left);
      node.right && queue.push(node.right);
    }
  }
  return depth;
};
// @lc code=end
