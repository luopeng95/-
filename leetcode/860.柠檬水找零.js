/*
 * @lc app=leetcode.cn id=860 lang=javascript
 *
 * [860] 柠檬水找零
 */

// @lc code=start
/**
 * 迭代解法：使用两个指针保存 5 美元 和 10 美元的个数，在找零时，优先找 10 美元的单位。对给入的数组进行迭代并判断
 * 时间复杂度O(n)，空间复杂度O(n)
 * @param {number[]} bills
 * @return {boolean}
 */
var lemonadeChange = function (bills) {
    let len = bills.length;
    if (!len) return true;
    let five = 0;
    let ten = 0;
    for (let i = 0; i <= len; ++i) {
        if (five < 0 || ten < 0) return false;
        if (bills[i] === 5) {
            five++;
        } else if (bills[i] === 10) {
            five--;
            ten++;
        } else if (bills[i] === 20) {
            if (ten) {
                ten--;
                five--;
            } else {
                five -= 3;
            }
        }
    }
    // if (five < 0 || ten < 0) return false;
    return true;
};
// @lc code=end
