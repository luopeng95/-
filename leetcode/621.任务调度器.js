/*
 * @lc app=leetcode.cn id=621 lang=javascript
 *
 * [621] 任务调度器
 */

// @lc code=start
/**
 * 比较任务总数量与所需格子数量：任务分布有两种情况 -- 1.任务总数量不满足数量最多的的任务分配冷却时间后所需要的数量，最短时间就是计算冷却时间后的数量 2.任务总数量大于等于分配冷却时间后的数量，那么就返回任务总数量
 * @param {character[]} tasks
 * @param {number} n
 * @return {number}
 */
var leastInterval = function (tasks, n) {
    // 计算每一种任务出现的次数
    let ary = {};
    let max = 0;
    let cnt = 0;
    let len = tasks.length;
    for (let i = 0; i < len; ++i) {
        let count = ary[tasks[i]] || 0;
        console.log(tasks[i]);
        count++;
        ary[tasks[i]] = count;
        if (count > max) {
            max = count;
            cnt = 1;
        } else if (count === max) {
            cnt++;
        }
    }
    // 按照冷却时间计算的最大值
    let cooling = (n + 1) * (max - 1) + cnt;
    return Math.max(len, cooling);
    // return cnt;
};
// leastInterval(['A', 'A', 'A', 'B', 'B', 'B']);
// @lc code=end
