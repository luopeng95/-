/*
 * @Author: your name
 * @Date: 2021-03-13 22:43:15
 * @LastEditTime: 2021-03-13 23:08:57
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \suanfa\leetcode\138.复制带随机指针的链表.js
 */
/*
 * @lc app=leetcode.cn id=138 lang=javascript
 *
 * [138] 复制带随机指针的链表
 */

// @lc code=start
/**
 * // Definition for a Node.
 * function Node(val, next, random) {
 *    this.val = val;
 *    this.next = next;
 *    this.random = random;
 * };
 */

/**
 * @param {Node} head
 * @return {Node}
 */
var copyRandomList = function(head) {
	if (!head) return head;
	let cur = head;
	// 复制出对应的链表节点
	while (cur) {
			let newNode = new ListNode(cur.val);
			newNode.next = cur.next;
			newNode.random = cur.random;
			cur.next = newNode;
			cur = newNode.next;
	}

	// 改变复制出来的链表的 random  指向
	cur = head.next;
	while (cur) {
			(cur.random) && (cur.random = cur.random.next);
			(cur = cur.next) && (cur = cur.next);
	}

	let ret = p = head.next;
	while (p.next) {
		head.next = head.next.next;
		p.next = p.next.next;
		head = head.next;
		p = p.next;
	}

	// 拆分出需要返回的链表
	head.next = null;
	return ret
};
// @lc code=end

