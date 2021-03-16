/*
 * @lc app=leetcode.cn id=969 lang=javascript
 *
 * [969] 煎饼排序
 */

// @lc code=start
/**
 * 两次翻转解法：根据给出的规则，我们应当从最大那个数字开始起翻转（因为每一次的翻转都是从 0 开始，所以即便先对小数排序了后面也会被打乱）
 * @param {number[]} arr
 * @return {number[]}
 */
var pancakeSort = function (arr) {
    let symmetryArray = [];
    let len = arr.length;
    let ret = [];
    // 在 symmetryArray 里面用数组 index 对 arr 的值进行排序，index 对应 arr 里面的值。symmetryArray 的值代表对应 index 在 arr 里面的 索引。
    for (let i = 0; i < len; i++) {
        symmetryArray[arr[i]] = i;
    }

    // 开始进行循环
    for (let i = len; i > 0; --i) {
        // 判断如果本轮的最大值处在它该处于的位置，那么就不需要翻转了
        // if (symmetryArray[i] + 1 === i) {
        //     continue;
        // }

        // 判断最大值是否处于首位，是的话就只需要翻转一次。
        if (symmetryArray[i] !== 0) {
            ret.push(symmetryArray[i] + 1);
            soryAry(arr, symmetryArray[i] + 1, symmetryArray);
        }

        // 当 i === 1 的时候就只剩最前面的那个数了，不再进行翻转
        if (i !== 1) {
            ret.push(i);
            soryAry(arr, i, symmetryArray);
        }
    }
    return ret;
};

const soryAry = (arr, k, symmetryArray) => {
    let i = 0;
    let j = k - 1;
    while (i < j) {
        // 先交换原数组中的整数，再让对称数组同步最新的值
        [arr[i], arr[j]] = [arr[j], arr[i]];
        symmetryArray[arr[i]] = i;
        symmetryArray[arr[j]] = j;

        i++;
        j--;
    }
};

const eggs = pancakeSort([9, 8, 4, 1, 3, 2, 6, 5, 7]);
console.log(eggs);
// @lc code=end
