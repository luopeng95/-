/*
 * @Author: your name
 * @Date: 2021-03-06 16:13:30
 * @LastEditTime: 2021-03-07 17:40:55
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \suanfa\leetcode\206.反转链表.js
 */
/*
 * @lc app=leetcode.cn id=206 lang=javascript
 *
 * [206] 反转链表
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
 * 哈希表解法：使用哈希表循环存储所有的节点，然后再进行倒序循环更改每一个节点的 next 指向。（正向循环也是一样可以的）
 * 时间复杂度O(2n)，空间复杂度O(n)
 * @param {ListNode} head
 * @return {ListNode}
 */
/* var reverseList = function(head) {
	if (head === null || head.next === null) {
		return head;
	}

	// 设置哈希表
	let hashMap = new Map();
	hashMap.set(head, true);

	// 设置指针
	let cur = head;
	while (cur.next) {
		cur = cur.next;
		hashMap.set(cur);
	}

	// 循环结束代表已经存储了所有的节点
	let nodes = Array.from(hashMap.keys());
	let length = nodes.length;
	for (let i = length - 1; i > 0; --i) {
		nodes[i].next = nodes[i-1];
	}
	head.next = null;
	return nodes[length - 1];
}; */

/**
 * 迭代解法：cur--当前节点，pre--当前节点改变后要指向的节点，next--cur循环过程中的下一个节点。三指针解法就是打一个时间差，得到当前节点后就获取下一个节点，再马上修改 next 指向，这样既不会丢失原先的节点，又可以更改指向。
 * 时间复杂度O(n)，空间复杂度O(1)
 * @param {ListNode} head
 * @return {ListNode}
 */

/* const reverseList = (head) => {
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
} */

/**
 * 递归解法：输出的是最后一个节点，递归算法会从程序的最后一步开始计算也就是最后一个节点开始返回，再倒数第二个节点就会设置 最后一个节点的next指向倒数第二个节点。
 * 时间复杂度O(n)，空间复杂度O(n)
 * @param {ListNode} head
 * @return {ListNode}
 */

const recusive = (head) => {
	let tail;
	if (head.next.next === null) {
		tail = head.next;
		head.next.next = head
	} else {
		tail = recusive(head.next);
		head.next.next = head;
	}
	return tail;
}

 const reverseList = (head) => {
	if (head === null || head.next === null) {
		return head;
	}
	// 复杂的递归
	// let tail = recusive(head);
	// head.next = null;
	// return tail;

	// 简介的递归
	let newHead = reverseList(head.next);
	head.next.next = head;
	head.next = null;
	return newHead;
 }

// @lc code=end

