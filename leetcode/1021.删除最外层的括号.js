/*
 * @lc app=leetcode.cn id=1021 lang=javascript
 *
 * [1021] 删除最外层的括号
 */

// @lc code=start
/**
 * @param {string} S
 * @return {string}
 */
var removeOuterParentheses = function (S) {
    let ret = '';
    let pre = 0;
    let cnt = 0;

    for (let i = 0; i < S.length; ++i) {
        if (S[i] === '(') cnt += 1;
        else cnt -= 1;

        if (cnt) continue;
        ret += S.slice(pre + 1, i);
        pre = i + 1;
        console.log(ret);
    }
    return ret;
};

removeOuterParentheses('(()())(())(()(()))');
// @lc code=end
