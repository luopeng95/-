/*
 * @lc app=leetcode.cn id=946 lang=javascript
 *
 * [946] 验证栈序列
 */

// @lc code=start
/**
 * 栈操作思想：根据栈的先入后出思想，想出栈某一个元素，那么这个元素必定是当前的栈顶元素或者将来会入栈的元素，如果不是栈顶元素就继续入栈元素，直到没有元素可以入栈或者找到了需要入栈的元素进行入栈
 * 时间复杂度O(n)，空间复杂度O(n)
 * @param {number[]} pushed
 * @param {number[]} popped
 * @return {boolean}
 */
var validateStackSequences = function (pushed, popped) {
    // 定义一个栈来存储后续的入栈元素
    let vector = [];
    let len = popped.length;
    let j = 0;
    // 循环出栈队列，判断能否满足所有的出栈顺序
    for (let i = 0; i < len; ++i) {
        while (
            j < len &&
            (!vector.length || vector[vector.length - 1] !== popped[i])
        ) {
            // 当目前的进入栈为空或者栈顶元素不等于当前需要出栈的元素时，进行入栈操作
            vector.push(pushed[j]);
            ++j;
        }

        // 循环结束，判断当前栈顶是否相等
        if (vector[vector.length - 1] !== popped[i]) return false;
        vector.pop();
    }
    return true;
};
const res = validateStackSequences([1, 2, 3, 4, 5], [4, 5, 3, 2, 1]);
console.log(res);
// @lc code=end
