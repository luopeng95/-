/*
 * @lc app=leetcode.cn id=844 lang=javascript
 *
 * [844] 比较含退格的字符串
 */

// @lc code=start
/**
 * 栈思想：根据栈的思想，对字符串进行处理，比较两个字符串处理之后的数据是否一致进行判断。
 * 时间复杂度O(o)，空间复杂度O(n)
 * @param {string} S
 * @param {string} T
 * @return {boolean}
 */
/* var backspaceCompare = function (S, T) {
    const s = transForm(S);
    const t = transForm(T);

    if (s.length !== t.length) return false;
    return s.every((ele, idx) => {
        if (ele === t[idx]) {
            return true;
        } else {
            return false;
        }
    });
}; */

/**
 * 输入一个字符串，将字符串进行处理，并返回处理之后的字符串数组
 * @param {String} S
 * @return {string[]}
 */
const transForm = (S) => {
    let str = [];
    const len = S.length;
    for (let i = 0; i < len; ++i) {
        if (S[i] === '#') {
            str.pop();
        } else {
            str.push(S[i]);
        }
    }
    return str;
};

/**
 * 双指针：判断处理之后的两个字符串是否相等，在本质上还是判断在正确的 idx 情况下，原字符串之间是否相等。使用两个指针，遇到 # 号就要往前再挪一位，直到原字符串循环完毕（可以两个一起循环完毕，也可以只有单个循环完毕）
 * 时间复杂度O(n)，空间复杂度O(1)
 * @param {string} S
 * @param {string} T
 * @return {boolean}
 */
var backspaceCompare = (S, T) => {
    //  定义两个指针指向两个字符串的末尾
    let i = S.length - 1;
    let j = T.length - 1;
    let iStep = 0;
    let jStep = 0;

    while (i >= 0 || j >= 0) {
        while (i >= 0) {
            if (S[i] === '#') {
                --i;
                iStep++;
            } else if (iStep) {
                --i;
                iStep--;
            } else {
                break;
            }
        }

        while (j >= 0) {
            if (T[j] === '#') {
                --j;
                jStep++;
            } else if (jStep) {
                --j;
                jStep--;
            } else {
                break;
            }
        }
        console.log('此时的S和T比较：', S[i], T[j]);
        // 判断此时的两个字符串所指向的值是否相等
        if (S[i] !== T[j]) return false;
        --i;
        --j;
    }

    //  循环结束判断此时 i,j 的值
    if (i <= -1 && j <= -1) return true;
    return false;
};

console.log(backspaceCompare('nzp#o#g', 'b#nzp#o#g'));
// @lc code=end
