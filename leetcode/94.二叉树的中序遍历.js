/*
 * @lc app=leetcode.cn id=94 lang=javascript
 *
 * [94] 二叉树的中序遍历
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
 * @param {TreeNode} root
 * @return {number[]}
 */
var inorderTraversal = function (root) {
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
            // 0 代表压入左节点
            case 0:
                s2.push(1);
                if (ele.left) {
                    s1.push(ele.left);
                    s2.push(0);
                }
                break;
            // 1 代表输出值
            case 1:
                s2.push(2);
                ans.push(ele.val);
                break;
            // 2 代表压入右节点
            case 2:
                s1.pop();
                if (ele.right) {
                    s1.push(ele.right);
                    s2.push(0);
                }
                break;
        }
    }
    return ans;
};
// @lc code=end
