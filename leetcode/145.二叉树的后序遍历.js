/*
 * @lc app=leetcode.cn id=145 lang=javascript
 *
 * [145] 二叉树的后序遍历
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * 递归法：二叉树的后序遍历顺序是左右中，按照这个顺序进行递归即可
 * 时间复杂度O(n^2)，空间复杂度O(n)
 * @param {TreeNode} root
 * @return {number[]}
 */
var postorderTraversal = function (root) {
    // 定义数组存储最后要输出的值
    let puts = [];
    recursive(root, puts);
    return puts;
};

/**
 * 递归方法：
 * @param {TreeNode} node
 * @param {Array} ary
 * @return {void}
 */
const recursive = (node, ary) => {
    // 当 node 是空的时候就终止递归
    if (!node) return;
    recursive(node.left, ary);
    recursive(node.right, ary);
    ary.push(node.val);
};
// @lc code=end
