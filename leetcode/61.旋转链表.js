/*
 * @Author: your name
 * @Date: 2021-03-06 20:52:16
 * @LastEditTime: 2021-03-08 23:56:33
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \suanfa\leetcode\61.旋转链表.js
 */
/*
 * @lc app=leetcode.cn id=61 lang=javascript
 *
 * [61] 旋转链表
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * 暴力法：暴力法的解决思路是走一步就更新一步，比如旋转链表的重点是把要移动位数的倒数数字切出来并修改前后的next节点指向。
 * 时间复杂度O(n^2)，空间复杂度O(1)
 * 时间超限了。。。
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
/* var rotateRight = function(head, k) {
	if (head === null || head.next === null || k === 0) {
		return head;
	}
	// 设置指针保存头部、循环、被操作节点的前一个节点
	let cur = head;
	let loop = head.next;
	let pre = head;
	while (k--) {
		// 每次循环都找到最后的那个数并进行操作
		while (loop.next) {
			[pre, loop] = [loop, loop.next];
		}

		// 循环结束代表找到了最后一个节点
		pre.next = null;
		loop.next = cur;
		cur = loop;
	}
	return cur;
}; */

/**
 * 哈希表：存储所有的节点，利用求余直接从哈希表中取出想要操作的节点进行操作即可
 * 时间复杂度O(n)，空间复杂度O(n)
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */

/* const rotateRight = (head, k) => {
	if (head === null || head.next === null || k === 0) {
		return head;
	}
	// 建立哈希表
	let hashMap = new Map();
	hashMap.set(head, true);
	let cur = head.next
	while (cur) {
		hashMap.set(cur, true);
		cur = cur.next;
	}

	// 得到节点构成的数组
	let nodes = Array.from(hashMap.keys());
	let length = nodes.length;
	let num = k % length;
	if (!num) {
		return head;
	}

	// 得到要操作的节点并进行操作
	let node = nodes[length - 1];
	node.next = nodes[0];
	nodes[length - 1 - num].next = null;

	return nodes[length - num];
} */

/**
 * 双指针：先循环一遍所有的节点得到节点的长度，再使用求余得到实际要操作的位数，使用快指针代表要进行操作的链表最后一位，使用慢指针代表旋转后的链表最后一位
 * 时间复杂度O(n)，空间复杂度O(1)
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */

/* const rotateRight = (head, k) => {
	if (head === null || head.next === null || k === 0) {
		return head;
	}
	// 建立循环指针和长度
	let loop = head.next;
	let length = 1;
	while (loop) {
		loop = loop.next;
		length++;
	}

	// 循环结束得到长度开始计算操作值和二次循环
	let n = k % length;
	if (n === 0)  {
		return head
	}	;
	let fast = head;
	let low = head;
	while (n--) {
		fast = fast.next;
	}
	while (fast.next) {
		fast = fast.next;
		low = low.next;
	}

	// 定义最后要输出的节点
	let ret = low.next;
	fast.next = head;
	low.next = null;

	return ret;
} */

/**
 * 成环法：先循环一遍所有的节点得到节点的长度，并且先把最后一个节点指向head节点直接形成一个环，最后计算出要在哪里断开环就可以了
 * 时间复杂度O(n)，空间复杂度O(1)
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */

const rotateRight = (head, k) => {
	if (head === null || head.next === null || k === 0) {
		return head;
	}
	// 建立循环指针和长度
	let loop = head.next;
	let length = 2;
	while (loop.next) {
		loop = loop.next;
		length++;
	}
	

	// 循环结束得到长度开始计算操作值和二次循环
	let n = k % length;
	if (n === 0)  {
		return head
	};
	loop.next = head;
	let setp = length - n;
	let ret = head;
	while (--setp) {
		ret = ret.next;
	}

	let re = ret.next;
	ret.next = null;

	return re;
}

// @lc code=end

