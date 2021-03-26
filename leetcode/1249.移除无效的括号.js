/*
 * @Author: your name
 * @Date: 2021-03-22 23:44:59
 * @LastEditTime: 2021-03-22 23:54:24
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \suanfa\leetcode\1249.移除无效的括号.js
 */
/*
 * @lc app=leetcode.cn id=1249 lang=javascript
 *
 * [1249] 移除无效的括号
 */

// @lc code=start
/**
 * 双栈解法：一次遍历，存储所有不合规的左括号或者右括号，循环结束之后一次性更改所有不合规的括号。
 * 时间复杂度O(n)，空间复杂度O(n)
 * @param {string} s
 * @return {string}
 */
/* var minRemoveToMakeValid = function(s) {
	let left = [];
	let right = [];

	let len = s.length;

	for (let i = 0; i < len; ++i) {
		if (s[i] === '(') {
			left.push(i);
		} else if (s[i] === ")") {
			if (left.length) {
				left.pop();
			} else {
				right.push(i)
			}
		}
	}

	// 循环结束之后 left 和 right 中剩下的值都是需要被更改的值
	let strs = [...s];
	let newStr = left.concat(right);
	let l = newStr.length;

	for (let i = 0; i < l; ++i) {
		strs[newStr[i]] = "";
	}

	return strs.join("");
}; */

/**
 * 左右扫描解法：括号具有一定的特殊性--从左边开始是左括号先出现并开始配对，从右边开始是右括号先出现并开始配对。这样一来我们来回扫描一遍就可以得出最终的正确数据
 * 时间复杂度O(n)，空间复杂度O(n)
 * @param {string} s
 * @return {string}
 */
var minRemoveToMakeValid = function (s) {
    // 定义左字符串收集从左边开始扫描的数据
    let left = '';
    let len = s.length;
    let leftPar = 0;

    // 从左边开始扫描，去除所有多余的右括号
    for (let i = 0; i < len; ++i) {
        if (s[i] === '(') {
            left += s[i];
            leftPar++;
        } else if (s[i] === ')') {
            if (leftPar) {
                leftPar--;
                left += s[i];
            }
        } else {
            left += s[i];
        }
    }
    console.log('left循环结束：', left);
    if (!leftPar) return left;
    // 定义右字符串，收集从右边开始扫描的数据
    let right = '';
    let rightPar = 0;
    let leftLen = left.length;
    for (let i = leftLen - 1; i > -1; --i) {
        if (left[i] === ')') {
            right = left[i] + right;
            rightPar++;
        } else if (left[i] === '(') {
            if (rightPar) {
                rightPar--;
                right = left[i] + right;
            } else {
                // 之前 leftPar 记录了多余的左括号，当多余的左括号为 0 的时候就代表已经是正确的数据了。
                leftPar--;
                if (!leftPar && i) {
                    console.log('中途返回：', left.slice(0, i), right);
                    right = left.slice(0, i) + right;
                    return right;
                }
            }
        } else {
            right = left[i] + right;
        }
    }

    return right;
};
console.log('输出的值', minRemoveToMakeValid('())()((('));
// @lc code=end
