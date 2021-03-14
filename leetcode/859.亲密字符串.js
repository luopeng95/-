/*
 * @Author: your name
 * @Date: 2021-03-14 23:49:34
 * @LastEditTime: 2021-03-15 00:07:03
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: \suanfa\leetcode\859.亲密字符串.js
 */
/*
 * @lc app=leetcode.cn id=859 lang=javascript
 *
 * [859] 亲密字符串
 */

// @lc code=start
/**
 * 双指针迭代解法：先判断两个字符串是否相等，相等的话字符串中是否有重复的数字（只要有重复的数字，那么把那两个重复的数字调换顺序就可以了），不相等的话，找到第一个不相同的数，再找到第二个不相同的数，判断交叉是否相同。
 * @param {string} a
 * @param {string} b
 * @return {boolean}
 */
var buddyStrings = function(a, b) {

};

/**
 * 判断字符串是否有重复的字母
 * @param {string} str 
 */
const isRepeat = (str) => {
	// 通过 ASCII 编码的差值进行判断计算，也可以使用 set 集合进行计算
	let ary = new Array(26);
	for (let i = 0; i < str.length; ++i) {
		let idx = str[i] - 'a';
		let len = ary[idx] || 0;
		len++;
		if (len > 1) return true;
	}
	return false;
}
// @lc code=end

