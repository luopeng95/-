/*
 * @Author: your name
 * @Date: 2021-03-06 21:13:36
 * @LastEditTime: 2021-03-07 17:35:23
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \suanfa\leetcode\92.反转链表-ii.js
 */
/*
 * @lc app=leetcode.cn id=92 lang=javascript
 *
 * [92] 反转链表 II
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
 * 哈希表解法：依然还是先循环一遍所有的节点，再根据给出的左右边界进行翻转。最后处理边界值的情况，如果left = 1，就代表第一位也要进行翻转，最后输出的就是区间的最后一位。
 * 时间复杂度O(n)，空间复杂度O(n)
 * @param {ListNode} head
 * @param {number} left
 * @param {number} right
 * @return {ListNode}
 */
/* var reverseBetween = function(head, left, right) {
	if (head === null || head.next === null || left === right) {
		return head;
	}

	// 建立hash表
	let hashMap = new Map();
	hashMap.set(head);

	// 遍历的指针
	let cur = head.next;

	while (cur) {
		hashMap.set(cur);
		cur = cur.next;
	}
	// 循环结束，全部存储完成

	// 拿到节点数组并截取出需要翻转的区间
	let nodes = Array.from(hashMap.keys());
	let needs = nodes.slice(left - 1, right);
	let length = needs.length - 2;
	for (let i = 0; i <= length; ++i) {
		needs[i + 1].next = needs[i];
	}
	needs[0].next = nodes[right] || null;
	if (left !== 1) {
		nodes[left - 2].next = needs[length + 1];
		return nodes[0];
	} else {
		return needs[length + 1];
	}

}; */

/**
 * 逐步迭代解法：将中间需要翻转的部分进行翻转，每翻转一次都将把正确的头部连接做好
 * 时间复杂度O(n)，空间复杂度O(n)
 * @param {ListNode} head
 * @param {number} left
 * @param {number} right
 * @return {ListNode}
 */

/**
 * 传入翻转区间的第一个节点和需要翻转的长度，对它进行翻转。
 * 
 * @param {ListNode} head 
 * @param {number} cnt 
 * @returns 
 */
const recusive = (head, cnt) => {
	let pre = head;
	let cur = head.next;
	while (--cnt) {
		[cur.next, pre, cur] = [pre, cur, cur.next]
	}
	head.next = cur;
	return pre;
}

/* const reverseBetween = (head, left, right) => {
	if (head === null || head.next === null || left === right) {
		return head;
	}

	// 建立虚拟节点，指向head
	let ret = new ListNode(0, head);
	let leftNode = ret;
	let cnt = right - left + 1;
	while (--left) {
		leftNode = leftNode.next
	}

	// 迭代循环区域，cur是最后一个翻转的节点
	leftNode.next = recusive(leftNode.next, cnt);
	return ret.next;

} */

/**
 * 整体迭代解法：将中间需要翻转的部分看做是一个整体，把它切出来单独进行翻转操作，然后再连接回去
 * 时间复杂度O(n)，空间复杂度O(n)
 * @param {ListNode} head
 * @param {number} left
 * @param {number} right
 * @return {ListNode}
 */

const reverseList = (head) => {
	if (head === null || head.next === null) {
		return head;
	}

	// 设置三个指针
	let pre = head;
	let cur = head.next;
	pre.next = null;

	// 开始循环
	while (cur) {
		let next = cur.next;
		cur.next = pre;
		pre = cur;
		cur = next;
	}

	// 循环结束排序完成
	return pre;
}

 const reverseBetween = (head, left, right) => {
		if (head === null || head.next === null || left === right) {
			return head;
		}
		let ret = new ListNode(0, head);
		let pre = ret;
		const cnt = right - left;
		while (--left) {
			pre = pre.next;
		}

		// 翻转区间的第第一个值和最后一个值
		let leftNode = pre.next;
		let rightNode = pre;
		
		for (let i = 0; i <= cnt; i++) {
			rightNode = rightNode.next;
		}
		let cur = rightNode.next;
		rightNode.next = null;
		rightNode = reverseList(leftNode);

		pre.next = rightNode;
		leftNode.next = cur

		return ret.next;
 }

// @lc code=end

