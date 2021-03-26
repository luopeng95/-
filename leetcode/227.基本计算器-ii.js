/*
 * @lc app=leetcode.cn id=227 lang=javascript
 *
 * [227] 基本计算器 II
 */

// @lc code=start
/**
 * 栈思想：通过使用双栈操作来模拟递归栈，表达式的执行顺序是跟符号的优先级相关的，符号有两种优先级，优先级相同的情况下运算顺序无所谓，当优先级不用时我们要先计算优先级高的局部表达式再计算。
 * 时间复杂度O(n)，空间复杂度O(n)
 * 额外增加：改造成可以识别“()”的编码
 * @param {string} s
 * @return {number}
 */
var calculate = function (s) {
    // 方便后续计算操作，当等于 "@" 的时候表示已经循环完毕了
    s += '@';
    const len = s.length;
    let nums = [];
    let opts = [];
    // 循环整个表达式并进行操作
    for (let i = 0; i < len; i++) {
        let num = '';

        // 判断此时的 s[i] 情况分类
        if (s[i] === '(') {
            opts.push(s[i]);
            continue;
        } else if (s[i] === ')') {
            // 当此时为右括号的时候，就执行调这个括号里面的表达式
            while (opts[opts.length - 1] !== '(') {
                // 处理局部表达式
                const num2 = nums.pop();
                const num1 = nums.pop();
                const res = cmp(num1, num2, opts.pop());
                nums.push(res);
            }
            opts.pop();
        } else if (+s[i] <= 9 && +s[i] >= 0) {
            while (i < len && +s[i] <= 9 && +s[i] >= 0) {
                // 如果当前循环的是数字的话就加起来
                num += s[i];
                ++i;
            }
            // 循环结束，代表 s[i] 此时是符号
            num = +num;
            nums.push(num);
            i--;
        } else {
            // 判断栈顶元素的优先级比当前符号的优先级更高的话
            while (
                opts.length &&
                level(opts[opts.length - 1]) >= level(s[i]) &&
                opts[opts.length - 1] !== '('
            ) {
                // 处理局部表达式
                const num2 = nums.pop();
                const num1 = nums.pop();
                const res = cmp(num1, num2, opts.pop());
                nums.push(res);
            }

            // 无论是否处理局部表达式，最新的符号都要加到opts中
            opts.push(s[i]);
        }
    }
    // 循环结束之后 nums 中只会有一个数
    return nums[0];
};

/**
 * 判断符号
 * @param {string} oper 判断符号并且返回优先级
 * @return {number} 符号的优先级
 */
const level = (oper) => {
    switch (oper) {
        case '+':
        case '-':
            return 1;
        case '*':
        case '/':
            return 2;
        case '@':
            return 0;
    }
};

/**
 * 计算局部表达式并返回一个数字
 * @param {number} num1
 * @param {number} num2
 * @param {string} oper
 * @return {number} 局部表达式的计算值
 */
const cmp = (num1, num2, oper) => {
    switch (oper) {
        case '+':
            return num2 + num1;
        case '-':
            return num1 - num2;
        case '*':
            return num1 * num2;
        case '/':
            console.log(num1, num2);
            return Math.floor(num1 / num2);
    }
};

console.log(calculate('1+(9+9*2)+1'));
// @lc code=end
