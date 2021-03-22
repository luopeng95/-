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
var minRemoveToMakeValid = function(s) {
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
};
// @lc code=end

