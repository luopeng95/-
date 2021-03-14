/*
 * @Author: your name
 * @Date: 2021-03-13 15:57:07
 * @LastEditTime: 2021-03-13 20:59:02
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \suanfa\leetcode\86.分隔链表.js
 */
/*
 * @lc app=leetcode.cn id=86 lang=javascript
 *
 * [86] 分隔链表
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
 * 快排思想：将比中间值大的放在左边，比中间值小的放在右边，同时改变 next 指向，最后再把两边给连起来。这个思想既可以用两个虚拟头结点来实现，也可以使用哈希表来实现，这里只写一种方式。
 * 时间复杂度O(n)，空间复杂度O(n)
 * @param {ListNode} head
 * @param {number} x
 * @return {ListNode}
 */
/* var partition = function(head, x) {
	if (!head) {
		return head;
	}
	// 定义左区间和右区间
	let l = new ListNode(0);
	let p1 = l;
	let r = new ListNode(0);
	let p2 = r;
	let cur = head;
	// 循环一遍数组。并且进行操作
	while (cur) {
		if (cur.val < x) {
			l.next = cur;
			l = l.next;
		} else {
			r.next = cur;
			r = r.next;
		}
		cur = cur.next;
	}
	// 训话结束之后将两个链表拼接起来
	l.next = p2.next;
	r.next = null;
	return p1.next;
}; */

/**
 * 双指针思想：使用双指针来做到原地排序，p1指向小于中间值的尾部，p2指向大于中间值的尾部。
 * @param {ListNode} head
 * @param {number} x
 * @return {ListNode}
 */
var partition = function(head, x) {
	if (!head) return head;
	let ret = new ListNode(0, head);
	let preSlow = ret;
	let slow = head;
	let preFast = head;
	let fast = head.next;

	while (fast) {
		if (slow.val < x) {
			preSlow = slow;
			slow = slow.next;
			preFast = fast;
		} else if (fast.val < x) {
			preFast.next = fast.next;
			preSlow.next = fast;
			fast.next = slow;
			preSlow = fast;
		} else {
			preFast = fast;
		}
		fast = preFast.next;
	}

	return ret.next;
}

// @lc code=end

