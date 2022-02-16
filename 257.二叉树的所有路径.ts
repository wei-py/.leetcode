/*
 * @lc app=leetcode.cn id=257 lang=typescript
 *
 * [257] 二叉树的所有路径
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

function binaryTreePaths(root: TreeNode | null): string[] {
  let result: string[] = [];
  const getPath = function (node, curPath) {
    if (!node.left && !node.right) {
      curPath += node.val;
      result.push(curPath);
      return;
    }
    curPath += node.val + '->';
    node.left && getPath(node.left, curPath);
    node.right && getPath(node.right, curPath);
  }
  getPath(root, '');
  return result;
};
// @lc code=end
