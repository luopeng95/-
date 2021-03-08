/*
 * @Author: your name
 * @Date: 2021-03-06 15:01:35
 * @LastEditTime: 2021-03-06 16:04:07
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \suanfa\leetcode\202.快乐数.js
 */
/*
 * @lc app=leetcode.cn id=202 lang=javascript
 *
 * [202] 快乐数
 */

// @lc code=start

/**
 * 公共方法，获取下一个 “ 节点 ”的值
 * @param {string} n 
 * @return {number}
 */
const getNext = (n) => {
	const length = n.length;
	let cnt = 0;
	for (let i = 0; i < length; ++i) {
		cnt += (+n[i]) ** 2;
	}
	return cnt;
}


/**
 * 哈希表解法：在循环的过程当中记录循环过的数字，判断在数组中是否存在相同的数组，如果存在则说明有环，不是快乐数
 * 时间复杂度：O(log n)，空间复杂度O(log n)
 * @param {number} n
 * @return {boolean}
 */
/* var isHappy = function(n) {
	if (n === 1) {
		return true
	}

	// 存储当前的数字
	let hashMap = new Map();
	hashMap.set(n, true);

	// 存储当前的值
	let cur = n;
	while (cur !== 1) {
		// 存储当前的值和设置下个数的暂存器
		cur = cur + '';
		let cnt = getNext(cur);

		if (cnt === 1) {
			return true
		} else if (hashMap.has(cnt)) {
			return false
		}
		hashMap.set(cnt, true);
		cur = cnt;
	}
}; */

/**
 * 快慢指针解法：这个问题可以看成一个链表问题，只能通过当前值得到下一个值。如果给出的数有环最终会进行循环，那么快慢指针就会相遇，如果没有环，那么快指针就会先一步到达终点，也就是 1 的地方
 * 时间复杂度：O(n)，空间复杂度O(1)
 * @param {number} n
 * @return {boolean}
 */

const isHappy = (n) => {
	if (n === 1) {
		return true;
	}

	// 慢指针为n，快指针为n的下一个数
	let fast = getNext(n + '');
	let low = n;

	while (fast !== 1) {
		low = getNext(low + '');
		fast = getNext(getNext(fast + '') + '');
		if (fast === low) {
			return false;
		}
	}
	return true
}

// @lc code=end
