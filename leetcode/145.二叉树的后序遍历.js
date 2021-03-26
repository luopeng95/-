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
/* var postorderTraversal = function (root) {
    // 定义数组存储最后要输出的值
    let puts = [];
    recursive(root, puts);
    return puts;
}; */

/**
 * 递归方法：最终的期望是按照 左右中 的顺序把所有的节点存储到数组中并且输出。
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

/**
 * 迭代法：用一个栈存储当前要操作的节点，一个栈存储当前的操作类别
 * 时间复杂度O(n^2)，空间复杂度O(n)
 * @param {TreeNode} root
 * @return {number[]}
 */
var postorderTraversal = function (root) {
    let ans = [];
    if (!root) return ans;

    // 定义 s1 存储需要执行的变量 => 节点
    let s1 = [];
    // 定义 s2 存储变量对应的操作 => 递归体
    let s2 = [];

    s1.push(root);
    s2.push(0);

    while (s1.length) {
        // 拿到当前需要执行的操作
        const status = s2.pop();
        const ele = s1[s1.length - 1];
        switch (status) {
            // 0 操作代表准备压入左节点
            case 0:
                s2.push(1);
                if (ele.left) {
                    s1.push(ele.left);
                    s2.push(0);
                }
                break;
            // 1 代表压入右节点
            case 1:
                s2.push(2);
                if (ele.right) {
                    s1.push(ele.right);
                    s2.push(0);
                }
                break;
            // 2 代表准备出栈
            case 2:
                ans.push(s1.pop().val);
        }
    }
    return ans;
};
// @lc code=end
