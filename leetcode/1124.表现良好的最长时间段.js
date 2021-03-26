/*
 * @lc app=leetcode.cn id=1124 lang=javascript
 *
 * [1124] 表现良好的最长时间段
 */

// @lc code=start
/**
 * 前缀和 + 暴力求解：前缀和数组 -- 将原数组的前 i (i <= length) 之和存储到一个数组中，题中要求连续的最长时间段且时间段之和大于 0 。假设这连续的一端位于前缀和中的某一段（起点为i，终点为j），根据前缀和性质可以知道这段区间的和值为  S(j) - S(i)，且下边差值为长度。乙知上面的信息我们就可以使用 双重 for 循环暴力求解出 以当前外循环为终点的最长的连续时间端，那么当双重 for 循环结束之后的 max 值就是整个区间内最长的连续时间段。
 * 时间复杂度O(n^2)，空间复杂度O(n)
 * @param {number[]} hours
 * @return {number}
 */
/* var longestWPI = function (hours) {
    // 前缀和数组
    let ind = [0];
    let sum = 0;
    let max = 0;
    const len = hours.length;

    // 生成前缀和数组中的值
    for (let i = 1; i < len + 1; ++i) {
        if (hours[i - 1] > 8) ++sum;
        else sum--;

        ind[i] = sum;
    }

    // 双重 for 循环得到结果
    const indLen = ind.length;
    for (let i = 1; i < indLen; ++i) {
        for (let j = 0; j < i; j++) {
            if (ind[i] - ind[j] > 0) {
                max = Math.max(max, i - j);
            }
        }
    }

    return max;
}; */

/**
 * 前缀和 + 一次迭代：根据上面前缀的思想我们可以知道，比当前前缀和小的前缀和必定离当前位置越远越好，所以其实我们只需要拿到前缀和第一次出现的位置,后续当我们计算小于当前前缀和时与之前记录的 cnt - 1 的位置进行计算，就可以得到 cnt 与 cnt - 1之间的最大长度，但是 cnt - 1 本身可能也会存在比 cnt - 1还小的前缀和，所以我们额外定义 f 来记录到当前前缀和的最大长度 这样问题就变成了 f[cnt] = f[cnt - 1] + i - ind[cnt - 1]
 * 时间复杂度O(n^2)，空间复杂度O(n)
 * @param {number[]} hours
 * @return {number}
 */
var longestWPI = function (hours) {
    // 记录前缀和第一次出现的位置
    let ind = new Map();
    ind.set(0, -1);
    // 记录到前缀和的最大长度
    let f = new Map();
    f.set(0, 0);
    let max = 0;
    let cnt = 0;
    const len = hours.length;
    for (let i = 0; i < len; ++i) {
        if (hours[i] > 8) cnt++;
        else cnt--;
        // 判断当前的前缀和 cnt 有没有记录过
        if (!ind.has(cnt)) {
            // 记录当前前缀和的位置
            ind.set(cnt, i);

            // 判断 cnt - 1 存在与否，决定了怎么处理 f(n)；
            if (!ind.has(cnt - 1)) f.set(cnt, 0);
            else f.set(cnt, i - ind.get(cnt - 1) + f.get(cnt - 1));
        }

        // 不存在 cnt-1 代表没有比当前前缀更小的了，不用比较
        if (!ind.has(cnt - 1)) continue;
        // console.log(max, i - ind.get(cnt - 1) + f.get(cnt - 1));
        // 比较当前前缀和的最长长度和之前的max
        max = Math.max(max, i - ind.get(cnt - 1) + f.get(cnt - 1));
    }

    return max;
};
// longestWPI([9, 9, 6, 0, 6, 6, 9]);
// @lc code=end
