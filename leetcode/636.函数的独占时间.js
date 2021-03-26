/*
 * @lc app=leetcode.cn id=636 lang=javascript
 *
 * [636] 函数的独占时间
 */

// @lc code=start
/**
 * 栈思想：使用辅助栈来存储当前操作函数的 ID ，每次计算完时间之后把运行时间给对应的 ID 加上去并且判断需不需去除存储的 ID
 * 时间复杂度O(n)，空间复杂度O(n)
 * @param {number} n
 * @param {string[]} logs
 * @return {number[]}
 */
/* var exclusiveTime = function (n, logs) {
    let times = [];
    // 使用栈记住指针的 左括号
    let cur = [];
    let pre = 0;
    const len = logs.length;

    for (let i = 0; i < len; ++i) {
        // 判断当前元素和前一位的区别
        const now = logs[i].split(':');
        const num = now[2] - pre;
        // 判断是闭合还是拓展
        if (now[1] === 'start') {
            if (cur.length) {
                times[cur[cur.length - 1]] =
                    (times[cur[cur.length - 1]] || 0) + num;
            }
            cur.push(now[0]);
            pre = now[2];
        } else {
            times[cur[cur.length - 1]] =
                (times[cur[cur.length - 1]] || 0) + num + 1;
            cur.pop();
            pre = +now[2] + 1;
        }
    }
    return times;
}; */

/**
 * 递归思想：递归本质上也是使用栈，找到最内层的 一对括号 并且进行计算，再根据嵌套关系进行返回，返回的数据为内层 括号 的所有时间-- 独占时间 = 外层所有时间 - 内层所有时间
 * @param {*} n
 * @param {*} logs
 */
var exclusiveTime = function (n, logs) {
    // index 作为循环的指针, ans 存储返回的结果
    let index = 0;
    let ans = [];
    const len = logs.length;
    const next = () => {
        let duration = 0;
        // 找到最近的 右括号 完成匹配并计算独占时间
        const start = logs[index].split(':');
        while (index < len - 1 && logs[index + 1].indexOf('e') === -1) {
            index++;
            duration += next();
        }
        // 循环结束 index + 1 代表是右括号
        const end = logs[++index].split(':');
        const sum = end[2] - start[2] + 1;
        ans[start[0]] = (ans[start[0]] || 0) + sum - duration;
        return sum;
    };

    while (index < len) {
        next();
        index++;
    }

    return ans;
};

exclusiveTime(2, ['0:start:0', '1:start:2', '1:end:5', '0:end:6']);
// @lc code=end
