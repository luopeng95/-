/*
 * @lc app=leetcode.cn id=682 lang=javascript
 *
 * [682] 棒球比赛
 */

// @lc code=start
/**
 * 迭代操作：根据栈的思想，迭代操作列表记录每一轮的得分，最后进行相加。
 * 时间复杂度O(n)，空间复杂度O(n)
 * @param {string[]} ops
 * @return {number}
 */
var calPoints = function (ops) {
    // 存储分数
    let scores = [];
    const len = ops.length;
    for (let i = 0; i < len; ++i) {
        if (ops[i] === '+') {
            const first = scores.pop();
            const sec = scores.pop();
            const thir = first + sec;
            scores.push(first);
            scores.push(sec);
            scores.push(thir);
        } else if (ops[i] === 'D') {
            const first = scores.pop();
            const newScore = first * 2;
            scores.push(first);
            scores.push(newScore);
        } else if (ops[i] === 'C') {
        }
    }
};
// @lc code=end
