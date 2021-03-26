/*
 * @lc app=leetcode.cn id=331 lang=javascript
 *
 * [331] 验证二叉树的前序序列化
 */

// @lc code=start
/**
 * @param {string} preorder
 * @return {boolean}
 */
var isValidSerialization = function (preorder) {
    const ans = preorder.split(',');
    const len = ans.length;
    const res = [];
    for (let i = 0; i < len; ++i) {
        res.push(ans[i]);
        while (
            res.length >= 3 &&
            res[res.length - 1] === '#' &&
            res[res.length - 2] === '#'
        ) {
            res.pop();
            res.pop();
            res[res.length - 1] = '#';
        }
        if (res[0] === '#' && res[1] === '#') return false;
    }
    console.log('循环结束的res：', res);
    return res.length === 1 && res[0] === '#';
};
// isValidSerialization('9,3,4,#,#,1,#,#,2,#,6,#,#');
// @lc code=end
