/*
 * @lc app=leetcode.cn id=20 lang=javascript
 *
 * [20] 有效的括号
 */

// @lc code=start
/**
 * 栈解法：栈的特点是先进后出，FILO 特点，括号的特点也是如此，最后出现的左括号必定对应最先出现的右括号。
 * 时间复杂度O(n)，空间复杂度O(n)
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
    // 先定义一个数组来存储所有的左括号
    let allLefts = [];
    let len = s.length;

    for (let i = 0; i < len; ++i) {
        if (s[i] === ')') {
            let ele = allLefts.pop();
            if (ele !== '(') return false;
        } else if (s[i] === '}') {
            let ele = allLefts.pop();
            if (ele !== '{') return false;
        } else if (s[i] === ']') {
            let ele = allLefts.pop();
            if (ele !== '[') return false;
        } else {
            allLefts.push(s[i]);
        }
    }

    // 循环结束之后判断 allLefts 数组的长度
    if (!allLefts.length) return true;
    return false;
};
// @lc code=end
